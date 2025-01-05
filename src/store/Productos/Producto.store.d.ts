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
    };
};
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
};
export declare const useProductoStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ProductoStore>>;
export {};
