import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Suspense } from 'react';
const loading = () => _jsx("div", {});
const DefaultLayout = (props) => {
    const children = props['children'] || null;
    return (_jsx(_Fragment, { children: _jsx(Suspense, { fallback: loading(), children: children }) }));
};
export default DefaultLayout;
