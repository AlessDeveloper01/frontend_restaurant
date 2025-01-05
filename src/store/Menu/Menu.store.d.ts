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
    };
};
type MenuState = {
    menu: Product[];
    setMenu: (menu: Product[]) => void;
};
export declare const useMenuStore: import("zustand").UseBoundStore<import("zustand").StoreApi<MenuState>>;
export {};
