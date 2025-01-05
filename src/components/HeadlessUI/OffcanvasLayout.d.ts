import { ReactNode } from 'react';
interface OffcanvasLayoutProps {
    open: boolean;
    toggleOffcanvas: () => void;
    children: ReactNode;
    placement?: 'end' | 'start' | 'top' | 'bottom';
    sizeClassName?: string;
}
declare const OffcanvasLayout: ({ open, toggleOffcanvas, children, placement, sizeClassName }: OffcanvasLayoutProps) => import("react/jsx-runtime").JSX.Element;
export default OffcanvasLayout;
