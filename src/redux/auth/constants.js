export var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["API_RESPONSE_SUCCESS"] = "@@auth/API_RESPONSE_SUCCESS";
    AuthActionTypes["API_RESPONSE_ERROR"] = "@@auth/API_RESPONSE_ERROR";
    AuthActionTypes["LOGIN_USER"] = "@@auth/LOGIN_USER";
    AuthActionTypes["LOGOUT_USER"] = "@@auth/LOGOUT_USER";
    AuthActionTypes["SIGNUP_USER"] = "@@auth/SIGNUP_USER";
    AuthActionTypes["FORGOT_PASSWORD"] = "@@auth/FORGOT_PASSWORD";
    AuthActionTypes["FORGOT_PASSWORD_CHANGE"] = "@@auth/FORGOT_PASSWORD_CHANGE";
    AuthActionTypes["RESET"] = "@@auth/RESET";
})(AuthActionTypes || (AuthActionTypes = {}));
