import { create } from "zustand";

export type Producto = {
    id: number;
    name: string;
    price: number;
    category: number;
    status: boolean;
    ingredient: number[];
    categoryDetails?: {
        id: number;
        name: string;
        status: boolean;
    }
}

type ProductoStore = {
    productos: Producto[];
    id: number;
    name: string;
    price: number;
    category: number;
    status: boolean;
    ingredient: number[];
    setProductos: (productos: Producto[]) => void;
    setId: (id: number) => void;
    setName: (name: string) => void;
    setPrice: (price: number) => void;
    setCategory: (category: number) => void;
    setStatus: (status: boolean) => void;
    setIngredient: (ingredient: number[]) => void;
}

export const useProductoStore = create<ProductoStore>((set) => ({
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