import { create } from "zustand";

interface Personal {
    id: number;
    name: string;
    email: string;
    permissions: string[];
    password?: string;
}

export type StatePersonal = {
    id: number;
    name: string;
    email: string;
    permissions: string[];
    password?: string;
    setId: (id: number) => void;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPermissions: (permissions: string[]) => void;
    setPassword: (password: string) => void;
    personal: Personal[];
    setPersonal: (personal: Personal[]) => void;
}

export const usePersonalStore = create<StatePersonal>((set) => ({
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