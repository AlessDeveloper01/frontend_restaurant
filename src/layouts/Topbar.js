import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import MaximizeScreen from "../components/MaximizeScreen";
import { getMenuItems } from "@/helpers/menu";
import { Link } from "react-router-dom";
import axios from "axios";
function Menu({ onLinkClick }) {
    const items = getMenuItems();
    return (_jsx("nav", { className: "bg-white shadow-md p-8 min-h-screen list-none", children: items.map((item, index) => item.children ? (_jsx("li", { className: "flex items-end", children: _jsx("ul", { className: "list-none", children: item.children.map((child, index) => (_jsx("li", { className: "gap-3.5 text-gray-700 hover:text-primary-500 text-2xl", children: child.url && linkTemplate(child.url, child.icon, child.label, onLinkClick) }, index))) }) }, index)) :
            item.isTitle ? (_jsx("li", { className: "font-black text-gray-700 uppercase border-b my-4 border-gray-300", children: _jsx("p", { className: "text-xl my-4", children: item.label }) }, index)) : (_jsx("li", { className: "flex items-center gap-3.5 text-black hover:text-primary-500 text-2xl", children: item.url && linkTemplate(item.url, item.icon, item.label, onLinkClick) }, index))) }));
}
const linkTemplate = (url, icon, label, onClick) => {
    return (_jsxs(Link, { to: url, className: "flex items-center my-2", onClick: onClick, children: [_jsx("i", { className: icon }), _jsx("span", { className: "ml-2 text-sm font-black text-gray-600 uppercase", children: label })] }));
};
const Topbar = () => {
    const [toggle, setToggle] = useState(false);
    const [profilePerson, setProfilePerson] = useState({
        name: "",
        email: "",
        permissions: [],
    });
    const getProfile = async () => {
        try {
            const token = localStorage.getItem("restaurante_token");
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/profile`, {
                headers: {
                    Authorization: token,
                }
            });
            const { name, email, permissions } = response.data;
            setProfilePerson({
                name,
                email,
                permissions,
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getProfile();
    }, []);
    const setterMenu = () => {
        setToggle(!toggle);
        if (!toggle) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    };
    const leaveAccount = () => {
        localStorage.removeItem("restaurante_token");
        window.location.href = "/auth/login";
    };
    return (_jsx(_Fragment, { children: _jsxs("header", { className: "app-header flex items-center px-4 gap-3.5 relative justify-between", children: [_jsx("div", { className: `absolute left-0 top-[70px] flex items-center gap-3.5 lg:hidden z-50 transition-transform duration-300 ${toggle ? "transform translate-x-0" : "transform -translate-x-full"}`, children: _jsx(Menu, { onLinkClick: setterMenu }) }), _jsxs("button", { id: "button-toggle-menu", className: "nav-link p-2 lg:hidden", onClick: setterMenu, children: [_jsx("span", { className: "sr-only", children: "Menu Toggle Button" }), _jsx("span", { className: "flex items-center justify-center", children: _jsx("i", { className: "ri-menu-2-fill text-2xl" }) })] }), _jsx("div", { className: "flex", children: _jsx("div", { className: "flex flex-wrap items-end gap-3", children: _jsx("div", { className: "flex-shrink-0 group block", children: _jsxs("div", { className: "flex items-center", children: [_jsxs("div", { className: "ms-3", children: [_jsxs("h3", { className: "text-xs lg:text-md font-semibold text-gray-800 dark:text-white", children: ["Usuario: ", _jsx("span", { className: "text-primary font-bold", children: profilePerson.name })] }), _jsxs("p", { className: "text-xs lg:text-md font-semibold text-gray-800 dark:text-white", children: ["Correo: ", _jsx("span", { className: "text-primary font-bold", children: profilePerson.email })] })] }), _jsx("div", { className: "flex ml-5", children: _jsxs("button", { className: "px-1 py-0 lg:px-2 lg:py-1 bg-danger text-white rounded-md hover:bg-danger/60 transition-all duration-300 flex gap-2 items-center", onClick: leaveAccount, children: [_jsx("i", { className: "ri-user-received-2-fill text-2xl" }), ' ', " Salir"] }) })] }) }) }) }), _jsx("div", { className: "md:flex hidden ms-auto", children: _jsx(MaximizeScreen, {}) })] }) }));
};
export default Topbar;
