import { create } from "zustand";
export const useCajaStore = create((set) => ({
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
