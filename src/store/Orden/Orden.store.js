import { create } from "zustand";
export const useOrdenStore = create((set) => ({
    idOrden: 0,
    orden: [],
    mesero: '',
    setMesero: (mesero) => set({ mesero }),
    addItem: (item) => set((state) => {
        const existingItem = state.orden.find((i) => i.item.id === item.item.id);
        if (existingItem) {
            return {
                orden: state.orden.map((i) => i.item.id === item.item.id ? { ...i, quantity: i.quantity + item.quantity } : i),
            };
        }
        else {
            return { orden: [...state.orden, item] };
        }
    }),
    removeItem: (id) => set((state) => ({ orden: state.orden.filter((item) => item.item.id !== id) })),
    clearOrden: () => set({ orden: [] }),
    updateItem: (id, quantity) => set((state) => ({
        orden: state.orden.map((item) => {
            if (item.item.id === id) {
                return { ...item, quantity };
            }
            return item;
        })
    })),
    getSubtotal: () => {
        return useOrdenStore.getState().orden.reduce((acc, item) => acc + (item.item.price * item.quantity), 0);
    },
    getTotal: () => {
        return useOrdenStore.getState().orden.reduce((acc, item) => acc + (item.item.price * item.quantity), 0);
    },
    getOrden: () => useOrdenStore.getState().orden,
    getOrdenLength: () => useOrdenStore.getState().orden.length,
    setOrden: (orden) => set({ orden }),
    setIdOrden: (id) => set({ idOrden: id }),
}));
