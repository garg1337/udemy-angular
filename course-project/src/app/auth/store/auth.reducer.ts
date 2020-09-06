import { User} from '../user.model';

import { AuthActions, AUTHENTICATE_SUCCESS, LOGOUT, LOGIN_START, AUTHENTICATE_FAIL, SIGNUP_START } from './auth.actions';

export interface AuthState {
    user: User;
    authError: string;
    loading: boolean;
}

const initialState = {
    user: null,
    authError: null,
    loading: false,
}

export function authReducer(state = initialState, action: AuthActions) {
    switch (action.type) {
        case AUTHENTICATE_SUCCESS: {
            const user = new User(action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate);
            return {
                ...state,
                user: user,
                authError: null,
                loading: false,
            };
        }
        case LOGOUT: {
            return {
                ...state,
                user: null,
                loading: false,
            };
        }
        case LOGIN_START:
        case SIGNUP_START: {
            return {
                ...state,
                authError: null,
                loading: true,
            };
        }
        case AUTHENTICATE_FAIL: {
            return {
                ...state,
                user: null,
                authError: action.payload,
                loading: false,
            }
        }
        default:
            return state;
    }
}