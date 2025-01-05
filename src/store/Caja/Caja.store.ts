import { create } from "zustand";

interface Product {
    category: number;
    id: number;
    ingredients: number[];
    name: string;
    price: number;
    status: boolean;
}

interface BoxProduct {
    boxId: number;
    createdAt: string;
    id: number;
    productId: number;
    quantity: number;
    updatedAt: string;
    product?: Product;
}

interface Box {
    boxProducts: BoxProduct[];
    fecha: string;
    id: number;
    responsable: string;
    total: number;
}


interface CajaStore {
    caja: Box[];
    setCaja: (caja: []) => void;
    cajaIndividual: Box;
    setCajaIndividual: (caja: Box) => void;
}

export const useCajaStore = create<CajaStore>((set) => ({
    caja: [],
    setCaja: (caja) => set({ caja }),
    cajaIndividual: {
        boxProducts: [],
        fecha: '',
        id: 0,
        responsable: '',
        total: 0
    },
    setCajaIndividual: (caja) => set({ cajaIndividual: caja })
}));