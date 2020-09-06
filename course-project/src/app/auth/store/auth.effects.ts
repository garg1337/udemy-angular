import { Actions, ofType, Effect, } from '@ngrx/effects';
import { LOGIN_START, LoginStart, AuthenticateSuccess, AUTHENTICATE_SUCCESS, AuthenticateFail, SIGNUP_START, SignupStart, LOGOUT, AUTO_LOGIN } from './auth.actions';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { AuthService } from '../auth.service';


export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

const handleAuthentication = (resData: AuthResponseData) => {
    const expirationDate = new Date(
        new Date().getTime() + +resData.expiresIn * 1000
    );
    const user: User = new User(resData.email, resData.localId, resData.idToken, expirationDate);
    localStorage.setItem('userData', JSON.stringify(user));
    return new AuthenticateSuccess({
        email: resData.email,
        token: resData.idToken,
        userId: resData.localId,
        expirationDate: expirationDate,
        redirect: true
    });
};

const handleError = (error) => {
    let errorMessage = 'An unknown error occurred!';
    if (!error.error || !error.error.error) {
        return of(new AuthenticateFail(errorMessage));
    }
    switch (error.error.error.message) {
        case 'EMAIL_EXISTS':
            errorMessage = 'This email exists already';
            break;
        case 'EMAIL_NOT_FOUND':
            errorMessage = 'This email does not exist';
            break;
        case 'INVALID_PASSWORD':
            errorMessage = 'This password is not correct.';
            break;
    }
    return of(new AuthenticateFail(errorMessage));
};

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private http: HttpClient, private router: Router, private authService: AuthService) { }

    @Effect()
    authSignup = this.actions$.pipe(
        ofType(SIGNUP_START),
        switchMap((authData: SignupStart) => {
            return this.http.post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
                {
                    email: authData.payload.email,
                    password: authData.payload.password,
                    returnSecureToken: true,
                }).pipe(
                    tap(resData => this.authService.setLogoutTimer(+resData.expiresIn * 1000)),
                    map(handleAuthentication),
                    catchError(handleError)
                );
        }),
    );

    @Effect()
    authLogin = this.actions$.pipe(
        ofType(LOGIN_START),
        switchMap((authData: LoginStart) => {
            return this.http.post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
                {
                    email: authData.payload.email,
                    password: authData.payload.password,
                    returnSecureToken: true,
                })
                .pipe(
                    tap(resData => this.authService.setLogoutTimer(+resData.expiresIn * 1000)),                    
                    map(handleAuthentication),
                    catchError(handleError)
                );
        })
    );

    @Effect({
        dispatch: false
    })
    authSuccess = this.actions$.pipe(ofType(AUTHENTICATE_SUCCESS), tap((authSuccess:
        AuthenticateSuccess) => {
        if(authSuccess.payload.redirect) {
            this.router.navigate(['/recipes']);
        }
    }));

    @Effect({
        dispatch: false
    })
    logout = this.actions$.pipe(ofType(LOGOUT), tap(() => {
        this.router.navigate(['/auth']);
        localStorage.removeItem['userData'];
        this.authService.clearLogoutTimer();
    }));

    @Effect()
    autoLogin = this.actions$.pipe(
        ofType(AUTO_LOGIN),
        map(() => {
            const userData = localStorage.getItem('userData');
            if (!userData) {
                return { type: 'DUMMY' };
            }
            const user:{
                email: string,
                id: string,
                _token: string,
                _tokenExpirationDate: string
            } = JSON.parse(userData);
            const loadedUser = new User(user.email, user.id, user._token, new Date(user._tokenExpirationDate));
            if(!loadedUser.token) {
                return { type: 'DUMMY' };
            }
            this.authService.setLogoutTimer(new Date(user._tokenExpirationDate).getTime() - new Date().getTime());
            return new AuthenticateSuccess({
                email: loadedUser.email,
                userId: loadedUser.id,
                token: loadedUser.token,
                expirationDate: new Date(user._tokenExpirationDate),
                redirect: false
            });
        }),
    );
}