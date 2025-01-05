import { create } from "zustand";
const defaultVentaItem = {
    id: 0,
    mesero: '',
    total: 0,
    status: false,
    orderReadyAt: '',
    date: '',
    orderProducts: [],
};
export const useVentasStore = create((set) => ({
    id: 0,
    setId: (id) => set({ id }),
    ventas: [],
    orden: defaultVentaItem,
    setVentas: (ventas) => set({ ventas }),
    setOrden: (orden) => set({ orden })
}));
