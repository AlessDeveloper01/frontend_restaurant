type GlobalStore = {
    modal: {
        open: boolean;
        component: React.ReactNode;
    };
    toast: {
        type: 'error' | 'success' | 'warning' | 'info';
        msg: string;
    };
    alert: {
        type: 'error' | 'success' | 'warning' | 'info';
        msg: string;
    };
    modalDelete: boolean;
    setToast: (type: 'error' | 'success' | 'warning' | 'info', msg: string) => void;
    setAlert: (type: 'error' | 'success' | 'warning' | 'info', msg: string) => void;
    setModalDelete: (status: boolean) => void;
    setModal: (status: boolean, component: React.ReactNode) => void;
};
export declare const useGlobalStore: import("zustand").UseBoundStore<import("zustand").StoreApi<GlobalStore>>;
export {};
