import { create } from "zustand";

type InventarioProducto = {
    id: number;
    name: string;
    stock: number;
}

type InventarioState = {
    id: number;
    name: string;
    stock: number;
    productos: InventarioProducto[];
    setId: (id: number) => void;
    setNombre: (name: string) => void;
    setStock: (stock: number) => void;
    setProductos: (productos: InventarioProducto[]) => void;
}

export const useInventarioStore = create<InventarioState>((set) => ({
    id: 0,
    name: '',
    stock: 0,
    productos: [],
    setNombre: (name: string) => set({ name }),
    setStock: (stock: number) => set({ stock }),
    setProductos: (productos: InventarioProducto[]) => set({ productos }),
    setId: (id: number) => set({ id }),
}));