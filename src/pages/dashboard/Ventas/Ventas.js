import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { io } from "socket.io-client";
const socket = io(import.meta.env.VITE_API_URL);
import { PageBreadcrumb } from "@/components";
import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "../../../store/Global/Global.store";
import { ModalLayout } from "@/components/HeadlessUI";
import { useEffect } from "react";
import checkPermissions from "@/utils/checkPermissions";
import { getOrdersComplete } from "./api/getOrdersComplete";
import { useVentasStore } from "@/store/Ventas/Ventas.store";
import CardOrden from "./components/CardOrden";
import CerrarCaja from "../Caja/CerrarCaja";
const PaginaVentas = () => {
    const navigate = useNavigate();
    const alert = useGlobalStore((state) => state.alert);
    const toast = useGlobalStore((state) => state.toast);
    const setToast = useGlobalStore((state) => state.setToast);
    const ventas = useVentasStore((state) => state.ventas);
    const setVentas = useVentasStore((state) => state.setVentas);
    const modal = useGlobalStore((state) => state.modal);
    const setModal = useGlobalStore((state) => state.setModal);
    useEffect(() => {
        const checkPermissionsAsync = async () => {
            const check = await checkPermissions(["1", "6"]);
            if (!check) {
                setToast("error", "No tienes permisos para acceder a esta sección");
            }
        };
        checkPermissionsAsync();
    }, []);
    useEffect(() => {
        const getOrders = async () => {
            const response = await getOrdersComplete();
            const errors = [400, 401, 402, 403, 404, 500];
            if (errors.includes(response.status)) {
                setVentas([]);
            }
            else {
                setVentas(response);
            }
        };
        getOrders();
    }, []);
    useEffect(() => {
        socket.on("updateOrders", () => {
            const getOrders = async () => {
                const response = await getOrdersComplete();
                const errors = [400, 401, 402, 403, 404, 500];
                if (errors.includes(response.status)) {
                    setVentas([]);
                }
                else {
                    setVentas(response);
                }
            };
            getOrders();
        });
        return () => {
            socket.off("updateOrders");
        };
    }, []);
    const handleModal = () => {
        setToast("info", "");
        navigate("/dashboard");
    };
    const handleCloseBox = async () => {
        setModal(true, _jsx(CerrarCaja, {}));
    };
    return (_jsxs("div", { children: [!toast.msg && (_jsx(PageBreadcrumb, { title: "Ordenes Vendidas", subName: "Dashboard" })), toast.msg ? (_jsx(ModalLayout, { showModal: true, toggleModal: handleModal, panelClassName: "sm:max-w-xs", placement: "justify-center items-start", children: _jsx("div", { className: `duration-300 ease-in-out transition-all sm:w-full m-3 sm:mx-auto flex flex-col bg-danger shadow-sm rounded`, children: _jsx("div", { className: "p-9 overflow-y-auto", children: _jsxs("div", { className: "text-center text-white", children: [_jsx("i", { className: `ri-close-circle-line text-4xl` }), _jsx("h4", { className: "text-xl font-medium mt-3 mb-2.5", children: "\u00A1Hay un problema!" }), _jsx("p", { className: "mt-6 mb-4", children: toast.msg }), _jsx("button", { type: "button", className: "btn bg-light text-gray-800 my-2", onClick: handleModal, children: "Continue" })] }) }) }) })) : (_jsxs("div", { className: "relative", children: [_jsx("div", { className: "my-7", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h4", { className: "card-title", children: "Listado de ordenes completadas" }), _jsxs("div", { className: "flex items-center gap-2 flex-col", children: [ventas && ventas.length > 0 && (_jsxs("p", { className: "text-gray-800 dark:text-gray-400 font-semibold text-sm text-center", children: ["Total de ordenes completas:", " ", _jsx("span", { className: "font-bold", children: ventas.length })] })), _jsxs("button", { className: "btn bg-primary text-white flex items-center gap-1 w-full", onClick: handleCloseBox, children: [_jsx("i", { className: "ri-refresh-line" }), " Cerrar caja"] })] })] }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: ventas &&
                            ventas.length > 0 &&
                            ventas.map((venta) => (_jsx(CardOrden, { venta: venta }, venta.id))) }), ventas && ventas.length === 0 && (_jsx("div", { className: "text-center w-full", children: _jsx("p", { className: "text-gray-800 dark:text-gray-400 font-black text-2xl", children: "No hay ordenes completadas" }) })), alert.msg !== "" && (_jsx("div", { className: `fixed top-20 md:top-32 right-4 md:right-10 z-50 ${alert.type === "error"
                            ? "bg-danger text-white border border-red-600"
                            : "bg-success text-white border border-green-600"} text-sm rounded-md py-3 px-5 mb-2`, children: _jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx("i", { className: `ri-${alert.type === "error"
                                        ? "close-circle-line"
                                        : "check-line"} text-base` }), _jsxs("p", { className: "text-sm", children: [alert.type === "error" ? "Error" : "Exito", ":", " ", _jsx("span", { className: "font-bold", children: alert.msg })] })] }) })), modal.open && modal.component] }))] }));
};
export default PaginaVentas;
