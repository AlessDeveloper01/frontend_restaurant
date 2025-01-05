import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { PageBreadcrumb } from "@/components";
import { ModalLayout } from "@/components/HeadlessUI";
import { useCajaStore } from "@/store/Caja/Caja.store";
import { useGlobalStore } from "@/store/Global/Global.store";
import checkPermissions from "@/utils/checkPermissions";
import { Grid, _ } from "gridjs-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getBoxes } from "./api/getBoxes";
import { formatDateTime } from "@/helpers/format-date-hour";
import formatMxCurrency from "@/helpers/format-currency";
const PaginaCaja = () => {
    const navigate = useNavigate();
    const caja = useCajaStore((state) => state.caja);
    const setCaja = useCajaStore((state) => state.setCaja);
    const toast = useGlobalStore((state) => state.toast);
    const setToast = useGlobalStore((state) => state.setToast);
    useEffect(() => {
        const checkPermissionsAsync = async () => {
            const check = await checkPermissions(["6"]);
            if (!check) {
                setToast("error", "No tienes permisos para acceder a esta sección");
            }
        };
        checkPermissionsAsync();
    }, []);
    useEffect(() => {
        const getCaja = async () => {
            const response = await getBoxes();
            if (response) {
                setCaja(response.boxes);
            }
            else {
                setCaja([]);
            }
        };
        getCaja();
    }, []);
    const handleModal = () => {
        setToast("info", "");
        navigate("/dashboard");
    };
    return (_jsxs(_Fragment, { children: [!toast.msg && (_jsx(PageBreadcrumb, { title: "Caja Registradora", subName: "Dashboard" })), toast.msg ? (_jsx(ModalLayout, { showModal: true, toggleModal: handleModal, panelClassName: "sm:max-w-xs", placement: "justify-center items-start", children: _jsx("div", { className: `duration-300 ease-in-out transition-all sm:w-full m-3 sm:mx-auto flex flex-col bg-danger shadow-sm rounded`, children: _jsx("div", { className: "p-9 overflow-y-auto", children: _jsxs("div", { className: "text-center text-white", children: [_jsx("i", { className: `ri-close-circle-line text-4xl` }), _jsx("h4", { className: "text-xl font-medium mt-3 mb-2.5", children: "\u00A1Hay un problema!" }), _jsx("p", { className: "mt-6 mb-4", children: toast.msg }), _jsx("button", { type: "button", className: "btn bg-light text-gray-800 my-2", onClick: handleModal, children: "Continue" })] }) }) }) })) : (_jsxs(_Fragment, { children: [_jsx("div", { className: "my-7", children: _jsx("h4", { className: "card-title", children: "Listado de cortes de caja" }) }), _jsx("section", { children: caja && caja.length > 0 ? (_jsx(Grid, { data: caja.map((item) => [
                                item.id,
                                item.responsable,
                                _(_jsxs("p", { children: ["Corte - #", item.id] })),
                                formatDateTime(item.fecha),
                                formatMxCurrency(item.total),
                                _(_jsx("div", { className: "flex items-center gap-2", children: _jsx("button", { type: "button", className: "btn bg-primary text-white", onClick: () => navigate(`/dashboard/caja/${item.id}`), children: _jsx("i", { className: "ri-eye-line" }) }) })),
                            ]), columns: ["ID", "Responsable", "Corte", "Fecha", "Total", "Acciones"], search: true, pagination: {
                                limit: 10,
                                summary: true,
                                nextButton: true,
                                prevButton: true,
                            }, sort: true, language: {
                                search: {
                                    placeholder: "Ingresa tu búsqueda",
                                },
                                pagination: {
                                    previous: "Anterior",
                                    next: "Siguiente",
                                    showing: "Mostrando",
                                    results: () => "Resultados",
                                    of: "de",
                                    to: "a",
                                    perPage: "por página",
                                },
                            } })) : (_jsxs("div", { className: "text-center text-gray-500", children: [_jsx("i", { className: `ri-shopping-cart-2-line text-4xl` }), _jsxs("h4", { className: "text-xl font-medium mt-3 mb-2.5", children: ["No hay cajas registradas ", caja.length] })] })) })] }))] }));
};
export default PaginaCaja;
