import { MenuItemTypes } from '../constants/menu';
/**
 * Renders the application menu
 */
interface AppMenuProps {
    menuItems: MenuItemTypes[];
}
declare const AppMenu: ({ menuItems }: AppMenuProps) => import("react/jsx-runtime").JSX.Element;
export default AppMenu;
