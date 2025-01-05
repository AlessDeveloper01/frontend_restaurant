import { ReactNode } from 'react';
import type { Placement } from '@floating-ui/dom';
interface PopoverLayoutProps {
    toggler: ReactNode;
    children: ReactNode;
    togglerClass?: string;
    placement?: Placement;
    menuClass?: string;
}
declare const PopoverLayout: ({ children, toggler, togglerClass, placement, menuClass }: PopoverLayoutProps) => import("react/jsx-runtime").JSX.Element;
export default PopoverLayout;
