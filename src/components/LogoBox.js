import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
//image
import logo from '@/assets/images/logo.png';
const LogoBox = () => {
    return (_jsx(_Fragment, { children: _jsx(Link, { to: "/", className: "logo-box", children: _jsx("img", { src: logo, className: "logo-lg h-[40px] w-2/3", alt: "Light logo" }) }) }));
};
export default LogoBox;
