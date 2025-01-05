import { create } from 'zustand';
export const useAuth = create((set) => ({
    name: '',
    email: '',
    password: '',
    errors: [],
    success: [],
    permissions: [],
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    setErrors: (errors) => set({ errors }),
    setSuccess: (success) => set({ success }),
    setPermissions: (permissions) => set({ permissions })
}));
