type ItemOrden = {
    item: {
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
        } | undefined;
    };
    quantity: number;
};
interface OrdenState {
    idOrden: number;
    orden: ItemOrden[];
    mesero: string;
    setMesero: (mesero: string) => void;
    addItem: (item: ItemOrden) => void;
    removeItem: (id: number) => void;
    clearOrden: () => void;
    updateItem: (id: number, quantity: number) => void;
    getSubtotal: () => number;
    getTotal: () => number;
    getOrden: () => ItemOrden[];
    getOrdenLength: () => number;
    setOrden: (orden: ItemOrden[]) => void;
    setIdOrden: (id: number) => void;
}
export declare const useOrdenStore: import("zustand").UseBoundStore<import("zustand").StoreApi<OrdenState>>;
export {};
