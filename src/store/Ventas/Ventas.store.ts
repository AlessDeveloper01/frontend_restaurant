import { create } from "zustand";

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
        }
    }[]
}

const defaultVentaItem: VentaItem = {
    id: 0,
    mesero: '',
    total: 0,
    status: false,
    orderReadyAt: '',
    date: '',
    orderProducts: [],
};

type VentasState = {
    id: number,
    setId: (id: number) => void;
    ventas: VentaItem[];
    orden: VentaItem;
    setVentas: (ventas: VentaItem[]) => void;
    setOrden: (orden: VentaItem) => void;
}

export const useVentasStore = create<VentasState>((set) => ({
    id: 0,
    setId: (id) => set({ id }),
    ventas: [],
    orden: defaultVentaItem,
    setVentas: (ventas) => set({ ventas }),
    setOrden: (orden) => set({ orden })
}));