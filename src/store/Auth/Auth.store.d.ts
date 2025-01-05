type AuthState = {
    errors: string[];
    success: string[];
    name: string;
    email: string;
    password: string;
    permissions: string[];
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setErrors: (errors: string[]) => void;
    setSuccess: (success: string[]) => void;
    setPermissions: (permissions: string[]) => void;
};
export declare const useAuth: import("zustand").UseBoundStore<import("zustand").StoreApi<AuthState>>;
export {};
