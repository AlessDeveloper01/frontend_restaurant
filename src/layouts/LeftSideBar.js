import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef } from 'react';
// assets
import SimpleBar from 'simplebar-react';
import AppMenu from './Menu';
import { getMenuItems } from '../helpers/menu';
import LogoBox from '@/components/LogoBox';
/* Sidebar content */
const SideBarContent = () => {
    return (_jsx(_Fragment, { children: _jsx(AppMenu, { menuItems: getMenuItems() }) }));
};
const LeftSideBar = ({ hideLogo }) => {
    const menuNodeRef = useRef(null);
    return (_jsx(React.Fragment, { children: _jsxs("div", { className: "app-menu hidden lg:block", ref: menuNodeRef, children: [!hideLogo && _jsx(LogoBox, {}), _jsxs("button", { id: "button-hover-toggle", className: "absolute top-5 end-2 rounded-full p-1.5 z-50", children: [_jsx("span", { className: "sr-only", children: "Menu Toggle Button" }), _jsx("i", { className: "ri-checkbox-blank-circle-line text-xl" })] }), _jsx(SimpleBar, { className: "scrollbar", children: _jsx(SideBarContent, {}) })] }) }));
};
export default LeftSideBar;
