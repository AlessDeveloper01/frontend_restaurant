import { create } from 'zustand';

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
}

export const useAuth = create<AuthState>((set) => ({
    name: '',
    email: '',
    password: '',
    errors: [],
    success: [],
    permissions: [],
    setName: (name: string) => set({ name }),
    setEmail: (email: string) => set({ email }),
    setPassword: (password: string) => set({ password }),
    setErrors: (errors: string[]) => set({ errors }),
    setSuccess: (success: string[]) => set({ success }),
    setPermissions: (permissions: string[]) => set({ permissions })
}));