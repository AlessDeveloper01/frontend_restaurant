import { create } from "zustand";
export const useCategorias = create((set) => ({
    id: 0,
    name: '',
    status: true,
    categorias: [],
    setCategorias: (categorias) => set({ categorias }),
    setStatus: (status) => set({ status }),
    setName: (name) => set({ name }),
    setId: (id) => set({ id }),
}));
