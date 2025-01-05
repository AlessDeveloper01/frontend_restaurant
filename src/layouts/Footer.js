import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (_jsx(React.Fragment, { children: _jsx("footer", { className: "footer h-16 flex items-center px-6 bg-white shadow dark:bg-gray-800 mt-auto", children: _jsxs("div", { className: "flex md:justify-between justify-center w-full gap-4", children: [_jsxs("div", { children: [new Date().getFullYear(), " \u00A9 LowSolutions -", ' ', _jsx(Link, { to: "https://lowsolutions.com/", target: "_blank", children: "LowSolutions" })] }), _jsx("div", { className: "md:flex hidden gap-4 item-center md:justify-end", children: _jsx(Link, { to: "/", className: "text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white", children: "Entusiasmados y apasionados por la tecnolog\u00EDa \uD83D\uDC96" }) })] }) }) }));
};
export default Footer;
