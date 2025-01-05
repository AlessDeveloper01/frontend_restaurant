import { create } from "zustand";
export const usePersonalStore = create((set) => ({
    id: 0,
    name: '',
    email: '',
    permissions: [],
    personal: [],
    password: '',
    setId: (id) => set({ id }),
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    setPermissions: (permissions) => set({ permissions }),
    setPersonal: (personal) => set({ personal }),
    setPassword: (password) => set({ password }),
}));
