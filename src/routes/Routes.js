import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes, ticketRoute } from ".";
import DefaultLayout from "../layouts/Default";
import VerticalLayout from "../layouts/Vertical";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PaginaMantenimiento from "../pages/promocional/Maintence";
const AllRoutes = () => {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const token = localStorage.getItem("restaurante_token");
        const splitToken = token?.split(" ")[1];
        axios.post(`${import.meta.env.VITE_API_URL}/auth/validate`, {}, {
            headers: {
                Authorization: splitToken,
            },
        })
            .then(() => {
            if (location.pathname === "/auth/login") {
                navigate("/dashboard");
            }
        })
            .catch(() => {
            localStorage.removeItem("restaurante_token");
            if (location.pathname != '/landing') {
                navigate("/auth/login");
            }
        });
    }, [navigate, location.pathname]);
    return (_jsx(_Fragment, { children: _jsxs(Routes, { children: [_jsx(Route, { children: publicRoutes.map((route, idx) => (_jsx(Route, { path: route.path, element: _jsx(DefaultLayout, { children: route.element }) }, idx))) }), _jsx(Route, { children: privateRoutes.map((route, idx) => (_jsx(Route, { path: route.path, element: _jsx(VerticalLayout, { children: route.element }) }, idx))) }), _jsx(Route, { children: ticketRoute.map((route, idx) => (_jsx(Route, { path: route.path, element: _jsx(DefaultLayout, { children: route.element }) }, idx))) }), _jsx(Route, { path: "*", element: _jsx(PaginaMantenimiento, {}) })] }) }));
};
export { AllRoutes };
