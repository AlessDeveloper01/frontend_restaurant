export type VentaItem = {
    id: number;
    mesero: string;
    total: number;
    status: boolean;
    orderReadyAt: string;
    date: string;
    orderProducts: {
        id: number;
        orderId: number;
        productId: number;
        quantity: number;
        product: {
            id: number;
            name: string;
            price: number;
            category: number;
            status: boolean;
        };
    }[];
};
type VentasState = {
    id: number;
    setId: (id: number) => void;
    ventas: VentaItem[];
    orden: VentaItem;
    setVentas: (ventas: VentaItem[]) => void;
    setOrden: (orden: VentaItem) => void;
};
export declare const useVentasStore: import("zustand").UseBoundStore<import("zustand").StoreApi<VentasState>>;
export {};
