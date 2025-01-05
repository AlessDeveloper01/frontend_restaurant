type InventarioProducto = {
    id: number;
    name: string;
    stock: number;
};
type InventarioState = {
    id: number;
    name: string;
    stock: number;
    productos: InventarioProducto[];
    setId: (id: number) => void;
    setNombre: (name: string) => void;
    setStock: (stock: number) => void;
    setProductos: (productos: InventarioProducto[]) => void;
};
export declare const useInventarioStore: import("zustand").UseBoundStore<import("zustand").StoreApi<InventarioState>>;
export {};
