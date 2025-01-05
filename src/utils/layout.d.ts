import { SideBarType } from '../constants/layout';
interface ConfigTypes {
    leftSideBarTypes: SideBarType.LEFT_SIDEBAR_TYPE_COMPACT | SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT | SideBarType.LEFT_SIDEBAR_TYPE_HIDDEN | SideBarType.LEFT_SIDEBAR_TYPE_HOVER | SideBarType.LEFT_SIDEBAR_TYPE_HOVERACTIVE | SideBarType.LEFT_SIDEBAR_TYPE_MOBILE | SideBarType.LEFT_SIDEBAR_TYPE_SMALL;
}
declare const getLayoutConfigs: (layoutWidth: string) => ConfigTypes;
/**
 * Changes the body attribute
 */
declare const changeHTMLAttribute: (attribute: string, value: string) => void;
export { getLayoutConfigs, changeHTMLAttribute };
