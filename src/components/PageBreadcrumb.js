import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
const PageBreadcrumb = ({ subName, title, addedChild }) => {
    const breadcrumbItems = ['LowSolutions', subName, title];
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsxs("title", { children: [title, " | LowSolutions Systems"] }) }), subName && (_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsxs("div", { className: "flex gap-4", children: [_jsx("h4", { className: "text-slate-900 dark:text-slate-200 text-lg font-medium", children: title }), addedChild] }), _jsx("div", { className: "md:flex hidden items-center gap-2.5 font-semibold", children: (breadcrumbItems || []).map((item, idx) => (_jsxs("div", { className: "flex items-center gap-2", children: [idx != 0 && _jsx("i", { className: "ri-arrow-right-s-line text-base text-slate-400 rtl:rotate-180" }), _jsx(Link, { to: "#", className: "text-sm font-medium text-slate-700 dark:text-slate-400", children: item })] }, idx))) })] }))] }));
};
export default PageBreadcrumb;
