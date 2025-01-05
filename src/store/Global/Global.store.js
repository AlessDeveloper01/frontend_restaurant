import { create } from "zustand";
export const useGlobalStore = create((set) => ({
    toast: {
        type: 'info',
        msg: ''
    },
    alert: {
        type: 'info',
        msg: ''
    },
    modal: {
        open: false,
        component: null
    },
    modalDelete: false,
    setToast: (type, msg) => set({ toast: { type, msg } }),
    setAlert: (type, msg) => set({ alert: { type, msg } }),
    setModalDelete: (status) => set({ modalDelete: status }),
    setModal: (status, component) => set({ modal: { open: status, component } }),
}));
