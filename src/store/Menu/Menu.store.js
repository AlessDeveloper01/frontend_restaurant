import { create } from "zustand";
export const useMenuStore = create((set) => ({
    menu: [],
    setMenu: (menu) => set({ menu }),
}));
