import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
// images
import logo from '@/assets/images/logo.png';
import logoDark from '@/assets/images/logo-dark.png';
const AuthLayout = ({ pageImage, authTitle, helpText, bottomLinks, children }) => {
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "relative flex flex-col items-center justify-center h-screen", children: _jsx("div", { className: "flex justify-center", children: _jsxs("div", { className: "max-w-md px-4 mx-auto", children: [_jsxs("div", { className: "card overflow-hidden", children: [_jsx("div", { className: "p-9 bg-primary", children: _jsxs(Link, { to: "/", className: "flex justify-center", children: [_jsx("img", { src: logo, alt: "logo", className: "h-6 block dark:hidden" }), _jsx("img", { src: logoDark, alt: "logo", className: "h-6 hidden dark:block" })] }) }), _jsxs("div", { className: "p-9", children: [_jsxs("div", { className: "text-center mx-auto w-3/4", children: [pageImage && _jsx("img", { src: pageImage, alt: "mail sent image", className: "h-16 mx-auto" }), _jsx("h4", { className: `${pageImage ? 'mt-9' : ''} text-dark/70 text-center text-lg font-bold dark:text-light/80 mb-2`, children: authTitle }), _jsx("p", { className: "text-gray-400 mb-9", children: helpText })] }), children] })] }), bottomLinks] }) }) }), _jsx("footer", { className: "absolute bottom-0 inset-x-0", children: _jsxs("p", { className: "font-medium text-center p-6", children: [new Date().getFullYear(), " \u00A9 Attex - Coderthemes.com"] }) })] }));
};
export default AuthLayout;
