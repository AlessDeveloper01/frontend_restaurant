import { create } from "zustand";

type GlobalStore = {
  modal: {
    open: boolean;
    component: React.ReactNode;
  }
  toast: {
    type: 'error' | 'success' | 'warning' | 'info';
    msg: string;
  }
  alert: {
    type: 'error' | 'success' | 'warning' | 'info';
    msg: string;
  }
  modalDelete: boolean;
setToast: (type: 'error' | 'success' | 'warning' | 'info', msg: string) => void;
setAlert: (type: 'error' | 'success' | 'warning' | 'info', msg: string) => void;
setModalDelete: (status: boolean) => void;
setModal: (status: boolean, component: React.ReactNode) => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
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
  setToast: (type: 'error' | 'success' | 'warning' | 'info', msg: string) => set({ toast: { type, msg } }),
  setAlert: (type: 'error' | 'success' | 'warning' | 'info', msg: string) => set({ alert: { type, msg } }),
  setModalDelete: (status: boolean) => set({ modalDelete: status }),
  setModal: (status: boolean, component: React.ReactNode) => set({ modal: { open: status, component } }),
}));

