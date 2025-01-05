import { create } from 'zustand';
export const useModalStore = create((set) => ({
    isModalOpen: null,
    handleModal: (index) => {
        set((state) => {
            if (index === state.isModalOpen)
                return { isModalOpen: null };
            return { isModalOpen: index };
        });
    },
}));
