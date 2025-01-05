import { LayoutActionTypes } from './constants';
export interface LayoutActionType<TPayload> {
    type: LayoutActionTypes.CHANGE_LAYOUT_THEME | LayoutActionTypes.CHANGE_LAYOUT_DIRECTION | LayoutActionTypes.CHANGE_LAYOUT_WIDTH | LayoutActionTypes.CHANGE_TOPBAR_THEME | LayoutActionTypes.CHANGE_SIDEBAR_THEME | LayoutActionTypes.CHANGE_SIDEBAR_TYPE | LayoutActionTypes.CHANGE_LAYOUT_POSITION | LayoutActionTypes.SHOW_RIGHT_SIDEBAR | LayoutActionTypes.HIDE_RIGHT_SIDEBAR;
    payload?: TPayload;
}
export declare const changeLayoutTheme: (theme: string) => LayoutActionType<string>;
export declare const changeLayoutDirection: (dir: string) => LayoutActionType<string>;
export declare const changeLayoutWidth: (width: string) => LayoutActionType<string>;
export declare const changeTopBarTheme: (theme: string) => LayoutActionType<string>;
export declare const changeSideBarTheme: (theme: string) => LayoutActionType<string>;
export declare const changeSideBarType: (type: string) => LayoutActionType<string>;
export declare const changeLayoutPosition: (position: string) => LayoutActionType<string>;
export declare const showRightSidebar: () => LayoutActionType<null>;
export declare const hideRightSidebar: () => LayoutActionType<null>;
