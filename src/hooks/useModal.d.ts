export default function useModal(): {
    isOpen: boolean;
    size: "lg" | "sm" | "xl" | undefined;
    className: string;
    scroll: boolean;
    toggleModal: () => void;
    openModalWithSize: (size: "sm" | "lg" | "xl") => void;
    openModalWithClass: (className: string) => void;
    openModalWithScroll: () => void;
};
