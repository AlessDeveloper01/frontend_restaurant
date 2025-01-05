import { create } from "zustand";

type Product = {
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
};

type MenuState = {
    menu: Product[];
    setMenu: (menu: Product[]) => void;
};

export const useMenuStore = create<MenuState>((set) => ({
    menu: [],
    setMenu: (menu) => set({ menu }),
}));