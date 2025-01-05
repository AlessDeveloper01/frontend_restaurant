type ModalState = {
    isModalOpen: number | null;
    handleModal: (index: number) => void;
};
export declare const useModalStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ModalState>>;
export {};
