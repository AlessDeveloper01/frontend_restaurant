import { ReactNode } from 'react';
interface ModalLayoutProps {
    showModal: boolean;
    toggleModal: () => void;
    panelClassName?: string;
    children: ReactNode;
    placement?: string;
    isStatic?: boolean;
}
declare const ModalLayout: ({ showModal, toggleModal, panelClassName, children, placement, isStatic }: ModalLayoutProps) => import("react/jsx-runtime").JSX.Element;
export default ModalLayout;
