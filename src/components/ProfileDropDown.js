import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import PopoverLayout from './HeadlessUI/PopoverLayout';
const ProfileDropDown = (props) => {
    const profilePic = props.profiliePic;
    const PopoverToggler = () => {
        return (_jsxs(_Fragment, { children: [_jsx("img", { src: profilePic, alt: "user-image", className: "rounded-full h-8" }), _jsxs("span", { className: "md:flex flex-col gap-0.5 text-start hidden", children: [_jsx("h5", { className: "text-sm", children: "Tosha Minner" }), _jsx("span", { className: "text-xs", children: "Founder" })] })] }));
    };
    return (_jsx(_Fragment, { children: _jsx(PopoverLayout, { placement: "bottom-end", togglerClass: "nav-link flex items-center gap-2.5 px-3 bg-black/5 border-x border-black/10", toggler: _jsx(PopoverToggler, {}), children: _jsxs("div", { className: "mt-1 end-0 absolute w-44 z-50 transition-all duration-300 bg-white shadow-lg border rounded-lg py-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800", children: [_jsx("h6", { className: "flex items-center py-2 px-3 text-xs text-gray-800 dark:text-gray-400", children: "Welcome !" }), (props.menuItems || []).map((item, idx) => {
                        return (_jsxs(Link, { to: item.redirectTo, className: "flex items-center gap-2 py-1.5 px-4 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300", children: [_jsx("i", { className: `${item.icon} text-lg align-middle` }), _jsx("span", { children: item.label })] }, idx));
                    })] }) }) }));
};
export default ProfileDropDown;
