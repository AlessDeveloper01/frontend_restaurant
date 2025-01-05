import { create } from "zustand";
export const useProductoStore = create((set) => ({
    productos: [],
    id: 0,
    name: "",
    price: 0,
    category: 0,
    status: false,
    ingredient: [],
    setProductos: (productos) => set({ productos }),
    setId: (id) => set({ id }),
    setName: (name) => set({ name }),
    setPrice: (price) => set({ price }),
    setCategory: (category) => set({ category }),
    setStatus: (status) => set({ status }),
    setIngredient: (ingredient) => set({ ingredient }),
}));
