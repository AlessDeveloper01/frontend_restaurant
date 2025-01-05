import { create } from "zustand";

export type Categoria = {
    id: number;
    name: string;
    status: boolean;
}

type CategoriasState = {
    id: number;
    name: string;
    status: boolean;
    categorias: Categoria[];
    setCategorias: (categorias: Categoria[]) => void;
    setStatus: (status: boolean) => void;
    setName: (name: string) => void;
    setId: (id: number) => void;
}

export const useCategorias = create<CategoriasState>((set) => ({
    id: 0,
    name: '',
    status: true,
    categorias: [],
    setCategorias: (categorias) => set({ categorias }),
    setStatus: (status) => set({ status }),
    setName: (name) => set({ name }),
    setId: (id) => set({ id }),
}));