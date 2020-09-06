import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { AppState } from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { LoginStart, SignupStart } from './store/auth.actions';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit, OnDestroy {
    isLoginMode = true;
    form: FormGroup;
    isLoading = false;
    error: string = null;
    storeSub: Subscription;

    @ViewChild('alertHost', { static: false }) alertHost: PlaceholderDirective;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private store: Store<AppState>) { }

    ngOnInit() {
        this.storeSub = this.store.select('auth').subscribe(authState => {
            this.isLoading = authState.loading;
            this.error = authState.authError;
            if (this.error) {
                this.showErrorAlert(this.error);
            }
        });
        this.form = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
        });
    }

    ngOnDestroy() {
        this.storeSub.unsubscribe();
    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit() {
        if (!this.form.valid) {
            return;
        }
        const email = this.form.value.email;
        const password = this.form.value.password;

        if (this.isLoginMode) {
            this.store.dispatch(new LoginStart({
                email: email,
                password: password,
            }));
        } else {
            this.store.dispatch(new SignupStart({
                email: email,
                password: password,
            }));
        }

        this.form.reset();
    }

    private showErrorAlert(errorMessage: string) {
        const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        this.alertHost.viewContainerRef.clear();

        const cr = this.alertHost.viewContainerRef.createComponent(alertCmpFactory);

        cr.instance.message = errorMessage;
        cr.instance.close.subscribe(() => {
            this.alertHost.viewContainerRef.clear();
        });
    }
}
