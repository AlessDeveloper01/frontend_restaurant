import { create } from "zustand";

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
    }
    quantity: number;
}

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

export const useOrdenStore = create<OrdenState>((set) => ({
    idOrden: 0,
    orden: [] as ItemOrden[],
    mesero: '',
    setMesero: (mesero: string) => set({ mesero }),
    addItem: (item: ItemOrden) => set((state) => {
        const existingItem = state.orden.find((i) => i.item.id === item.item.id);
        if (existingItem) {
            return {
                orden: state.orden.map((i) =>
                    i.item.id === item.item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                ),
            };
        } else {
            return { orden: [...state.orden, item] };
        }
    }),
    removeItem: (id: number) => set((state) => ({ orden: state.orden.filter((item) => item.item.id !== id) })),
    clearOrden: () => set({ orden: [] }),
    updateItem: (id: number, quantity: number) => set((state) => ({
        orden: state.orden.map((item) => {
            if (item.item.id === id) {
                return { ...item, quantity };
            }
            return item;
        })
    })),
    getSubtotal: (): number => {
        return useOrdenStore.getState().orden.reduce((acc: number, item: ItemOrden) => acc + (item.item.price * item.quantity), 0);
    },
    getTotal: (): number => {
        return useOrdenStore.getState().orden.reduce((acc: number, item: ItemOrden) => acc + (item.item.price * item.quantity), 0);
    },
    getOrden: (): ItemOrden[] => useOrdenStore.getState().orden,
    getOrdenLength: (): number => useOrdenStore.getState().orden.length,
    setOrden: (orden: ItemOrden[]) => set({ orden }),
    setIdOrden: (id: number) => set({ idOrden: id }),
}));