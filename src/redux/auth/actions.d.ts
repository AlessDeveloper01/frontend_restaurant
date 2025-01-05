import { AuthActionTypes } from './constants';
export interface AuthActionType {
    type: AuthActionTypes.API_RESPONSE_SUCCESS | AuthActionTypes.API_RESPONSE_ERROR | AuthActionTypes.FORGOT_PASSWORD | AuthActionTypes.FORGOT_PASSWORD_CHANGE | AuthActionTypes.LOGIN_USER | AuthActionTypes.LOGOUT_USER | AuthActionTypes.RESET | AuthActionTypes.SIGNUP_USER;
    payload: {} | string;
}
interface UserData {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    token: string;
}
export declare const authApiResponseSuccess: (actionType: string, data: UserData | {}) => AuthActionType;
export declare const authApiResponseError: (actionType: string, error: string) => AuthActionType;
export declare const loginUser: (username: string, password: string) => AuthActionType;
export declare const logoutUser: () => AuthActionType;
export declare const signupUser: (fullname: string, email: string, password: string) => AuthActionType;
export declare const forgotPassword: (username: string) => AuthActionType;
export declare const resetAuth: () => AuthActionType;
export {};
