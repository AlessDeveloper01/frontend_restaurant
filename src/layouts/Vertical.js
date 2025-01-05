import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { Suspense } from 'react';
import { Preloader } from '@/components';
const Topbar = React.lazy(() => import('./Topbar'));
const LeftSideBar = React.lazy(() => import('./LeftSideBar'));
const Footer = React.lazy(() => import('./Footer'));
const loading = () => _jsx("div", {});
const VerticalLayout = ({ children }) => {
    return (_jsx(_Fragment, { children: _jsx(Suspense, { fallback: loading(), children: _jsxs("div", { className: "flex wrapper", children: [_jsx(Suspense, { fallback: loading(), children: _jsx(LeftSideBar, { hideUserProfile: true, isCondensed: true, isLight: false }) }), _jsxs("div", { className: "page-content", children: [_jsx(Suspense, { fallback: loading(), children: _jsx(Topbar, {}) }), _jsx("main", { className: "p-6", children: _jsx(Suspense, { fallback: _jsx(Preloader, {}), children: children }) }), _jsx(Footer, {})] })] }) }) }));
};
export default VerticalLayout;
