import { create } from 'zustand';

type ModalState = {
    isModalOpen: number | null;
    handleModal: (index: number) => void;
}

export const useModalStore = create<ModalState>((set) => ({
    isModalOpen: null,
    handleModal: (index: number) => {
        set((state) => {
            if (index === state.isModalOpen) return { isModalOpen: null };
            return { isModalOpen: index };
        });
    },
}));