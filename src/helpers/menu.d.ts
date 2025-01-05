import { MenuItemTypes } from '../constants/menu';
declare const getMenuItems: () => MenuItemTypes[];
declare const findAllParent: (menuItems: MenuItemTypes[], menuItem: MenuItemTypes) => string[];
declare const findMenuItem: (menuItems: MenuItemTypes[] | undefined, menuItemKey: MenuItemTypes["key"] | undefined) => MenuItemTypes | null;
export { getMenuItems, findAllParent, findMenuItem };
