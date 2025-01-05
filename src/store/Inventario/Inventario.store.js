import { create } from "zustand";
export const useInventarioStore = create((set) => ({
    id: 0,
    name: '',
    stock: 0,
    productos: [],
    setNombre: (name) => set({ name }),
    setStock: (stock) => set({ stock }),
    setProductos: (productos) => set({ productos }),
    setId: (id) => set({ id }),
}));
