import { LayoutStateTypes } from './constants';
import { LayoutTheme, LayoutDirection, LayoutWidth, SideBarType, SideBarTheme, TopBarTheme, LayoutPosition } from '../../constants/layout';
import { LayoutActionType } from './actions';
declare const Layout: (state: LayoutStateTypes | undefined, action: LayoutActionType<string>) => {
    layoutTheme: string | undefined;
    layoutDirection: LayoutDirection.LEFT_TO_RIGHT | LayoutDirection.RIGHT_TO_LEFT;
    layoutWidth: LayoutWidth.LAYOUT_WIDTH_FLUID | LayoutWidth.LAYOUT_WIDTH_BOXED;
    topBarTheme: TopBarTheme.TOPBAR_LIGHT | TopBarTheme.TOPBAR_DARK | TopBarTheme.TOPBAR_BRAND;
    sideBarTheme: SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT | SideBarTheme.LEFT_SIDEBAR_THEME_DARK | SideBarTheme.LEFT_SIDEBAR_THEME_BRAND;
    sideBarType: SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT | SideBarType.LEFT_SIDEBAR_TYPE_HOVER | SideBarType.LEFT_SIDEBAR_TYPE_HOVERACTIVE | SideBarType.LEFT_SIDEBAR_TYPE_SMALL | SideBarType.LEFT_SIDEBAR_TYPE_COMPACT | SideBarType.LEFT_SIDEBAR_TYPE_MOBILE | SideBarType.LEFT_SIDEBAR_TYPE_HIDDEN;
    layoutPosition: LayoutPosition.POSITION_FIXED | LayoutPosition.POSITION_SCROLLABLE;
    isOpenRightSideBar: boolean;
} | {
    layoutDirection: string | undefined;
    layoutTheme: LayoutTheme.THEME_LIGHT | LayoutTheme.THEME_DARK;
    layoutWidth: LayoutWidth.LAYOUT_WIDTH_FLUID | LayoutWidth.LAYOUT_WIDTH_BOXED;
    topBarTheme: TopBarTheme.TOPBAR_LIGHT | TopBarTheme.TOPBAR_DARK | TopBarTheme.TOPBAR_BRAND;
    sideBarTheme: SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT | SideBarTheme.LEFT_SIDEBAR_THEME_DARK | SideBarTheme.LEFT_SIDEBAR_THEME_BRAND;
    sideBarType: SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT | SideBarType.LEFT_SIDEBAR_TYPE_HOVER | SideBarType.LEFT_SIDEBAR_TYPE_HOVERACTIVE | SideBarType.LEFT_SIDEBAR_TYPE_SMALL | SideBarType.LEFT_SIDEBAR_TYPE_COMPACT | SideBarType.LEFT_SIDEBAR_TYPE_MOBILE | SideBarType.LEFT_SIDEBAR_TYPE_HIDDEN;
    layoutPosition: LayoutPosition.POSITION_FIXED | LayoutPosition.POSITION_SCROLLABLE;
    isOpenRightSideBar: boolean;
} | {
    leftSideBarTypes: SideBarType.LEFT_SIDEBAR_TYPE_COMPACT | SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT | SideBarType.LEFT_SIDEBAR_TYPE_HIDDEN | SideBarType.LEFT_SIDEBAR_TYPE_HOVER | SideBarType.LEFT_SIDEBAR_TYPE_HOVERACTIVE | SideBarType.LEFT_SIDEBAR_TYPE_MOBILE | SideBarType.LEFT_SIDEBAR_TYPE_SMALL;
    layoutWidth: string | undefined;
    layoutTheme: LayoutTheme.THEME_LIGHT | LayoutTheme.THEME_DARK;
    layoutDirection: LayoutDirection.LEFT_TO_RIGHT | LayoutDirection.RIGHT_TO_LEFT;
    topBarTheme: TopBarTheme.TOPBAR_LIGHT | TopBarTheme.TOPBAR_DARK | TopBarTheme.TOPBAR_BRAND;
    sideBarTheme: SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT | SideBarTheme.LEFT_SIDEBAR_THEME_DARK | SideBarTheme.LEFT_SIDEBAR_THEME_BRAND;
    sideBarType: SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT | SideBarType.LEFT_SIDEBAR_TYPE_HOVER | SideBarType.LEFT_SIDEBAR_TYPE_HOVERACTIVE | SideBarType.LEFT_SIDEBAR_TYPE_SMALL | SideBarType.LEFT_SIDEBAR_TYPE_COMPACT | SideBarType.LEFT_SIDEBAR_TYPE_MOBILE | SideBarType.LEFT_SIDEBAR_TYPE_HIDDEN;
    layoutPosition: LayoutPosition.POSITION_FIXED | LayoutPosition.POSITION_SCROLLABLE;
    isOpenRightSideBar: boolean;
} | {
    topBarTheme: string | undefined;
    layoutTheme: LayoutTheme.THEME_LIGHT | LayoutTheme.THEME_DARK;
    layoutDirection: LayoutDirection.LEFT_TO_RIGHT | LayoutDirection.RIGHT_TO_LEFT;
    layoutWidth: LayoutWidth.LAYOUT_WIDTH_FLUID | LayoutWidth.LAYOUT_WIDTH_BOXED;
    sideBarTheme: SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT | SideBarTheme.LEFT_SIDEBAR_THEME_DARK | SideBarTheme.LEFT_SIDEBAR_THEME_BRAND;
    sideBarType: SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT | SideBarType.LEFT_SIDEBAR_TYPE_HOVER | SideBarType.LEFT_SIDEBAR_TYPE_HOVERACTIVE | SideBarType.LEFT_SIDEBAR_TYPE_SMALL | SideBarType.LEFT_SIDEBAR_TYPE_COMPACT | SideBarType.LEFT_SIDEBAR_TYPE_MOBILE | SideBarType.LEFT_SIDEBAR_TYPE_HIDDEN;
    layoutPosition: LayoutPosition.POSITION_FIXED | LayoutPosition.POSITION_SCROLLABLE;
    isOpenRightSideBar: boolean;
} | {
    sideBarTheme: string | undefined;
    layoutTheme: LayoutTheme.THEME_LIGHT | LayoutTheme.THEME_DARK;
    layoutDirection: LayoutDirection.LEFT_TO_RIGHT | LayoutDirection.RIGHT_TO_LEFT;
    layoutWidth: LayoutWidth.LAYOUT_WIDTH_FLUID | LayoutWidth.LAYOUT_WIDTH_BOXED;
    topBarTheme: TopBarTheme.TOPBAR_LIGHT | TopBarTheme.TOPBAR_DARK | TopBarTheme.TOPBAR_BRAND;
    sideBarType: SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT | SideBarType.LEFT_SIDEBAR_TYPE_HOVER | SideBarType.LEFT_SIDEBAR_TYPE_HOVERACTIVE | SideBarType.LEFT_SIDEBAR_TYPE_SMALL | SideBarType.LEFT_SIDEBAR_TYPE_COMPACT | SideBarType.LEFT_SIDEBAR_TYPE_MOBILE | SideBarType.LEFT_SIDEBAR_TYPE_HIDDEN;
    layoutPosition: LayoutPosition.POSITION_FIXED | LayoutPosition.POSITION_SCROLLABLE;
    isOpenRightSideBar: boolean;
} | {
    sideBarType: string | undefined;
    layoutTheme: LayoutTheme.THEME_LIGHT | LayoutTheme.THEME_DARK;
    layoutDirection: LayoutDirection.LEFT_TO_RIGHT | LayoutDirection.RIGHT_TO_LEFT;
    layoutWidth: LayoutWidth.LAYOUT_WIDTH_FLUID | LayoutWidth.LAYOUT_WIDTH_BOXED;
    topBarTheme: TopBarTheme.TOPBAR_LIGHT | TopBarTheme.TOPBAR_DARK | TopBarTheme.TOPBAR_BRAND;
    sideBarTheme: SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT | SideBarTheme.LEFT_SIDEBAR_THEME_DARK | SideBarTheme.LEFT_SIDEBAR_THEME_BRAND;
    layoutPosition: LayoutPosition.POSITION_FIXED | LayoutPosition.POSITION_SCROLLABLE;
    isOpenRightSideBar: boolean;
} | {
    layoutPosition: string | undefined;
    layoutTheme: LayoutTheme.THEME_LIGHT | LayoutTheme.THEME_DARK;
    layoutDirection: LayoutDirection.LEFT_TO_RIGHT | LayoutDirection.RIGHT_TO_LEFT;
    layoutWidth: LayoutWidth.LAYOUT_WIDTH_FLUID | LayoutWidth.LAYOUT_WIDTH_BOXED;
    topBarTheme: TopBarTheme.TOPBAR_LIGHT | TopBarTheme.TOPBAR_DARK | TopBarTheme.TOPBAR_BRAND;
    sideBarTheme: SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT | SideBarTheme.LEFT_SIDEBAR_THEME_DARK | SideBarTheme.LEFT_SIDEBAR_THEME_BRAND;
    sideBarType: SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT | SideBarType.LEFT_SIDEBAR_TYPE_HOVER | SideBarType.LEFT_SIDEBAR_TYPE_HOVERACTIVE | SideBarType.LEFT_SIDEBAR_TYPE_SMALL | SideBarType.LEFT_SIDEBAR_TYPE_COMPACT | SideBarType.LEFT_SIDEBAR_TYPE_MOBILE | SideBarType.LEFT_SIDEBAR_TYPE_HIDDEN;
    isOpenRightSideBar: boolean;
};
export default Layout;
