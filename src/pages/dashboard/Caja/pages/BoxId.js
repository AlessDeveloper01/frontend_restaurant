import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ModalLayout } from "@/components/HeadlessUI";
import { useCajaStore } from "@/store/Caja/Caja.store";
import { useGlobalStore } from "@/store/Global/Global.store";
import checkPermissions from "@/utils/checkPermissions";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getResumeBox } from "../api/getBoxId";
import formatMxCurrency from "@/helpers/format-currency";
import { formatDateTime } from "@/helpers/format-date-hour";
const BoxId = () => {
    const navigate = useNavigate();
    const cajaIndividual = useCajaStore((state) => state.cajaIndividual);
    const setCajaIndividual = useCajaStore((state) => state.setCajaIndividual);
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
    const { id } = useParams();
    useEffect(() => {
        const fetchCaja = async () => {
            const response = await getResumeBox(id);
            if (response.error) {
                navigate("/dashboard/caja");
            }
            else {
                setCajaIndividual(response.box);
            }
        };
        fetchCaja();
    }, [id]);
    const handleModal = () => {
        setToast("info", "");
        navigate("/dashboard");
    };
    return (_jsx(_Fragment, { children: toast.msg ? (_jsx(ModalLayout, { showModal: true, toggleModal: handleModal, panelClassName: "sm:max-w-xs", placement: "justify-center items-start", children: _jsx("div", { className: `duration-300 ease-in-out transition-all sm:w-full m-3 sm:mx-auto flex flex-col bg-danger shadow-sm rounded`, children: _jsx("div", { className: "p-9 overflow-y-auto", children: _jsxs("div", { className: "text-center text-white", children: [_jsx("i", { className: `ri-close-circle-line text-4xl` }), _jsx("h4", { className: "text-xl font-medium mt-3 mb-2.5", children: "\u00A1Hay un problema!" }), _jsx("p", { className: "mt-6 mb-4", children: toast.msg }), _jsx("button", { type: "button", className: "btn bg-light text-gray-800 my-2", onClick: handleModal, children: "Continue" })] }) }) }) })) : (_jsxs("div", { className: "w-full md:w-1/2 lg:w-1/3 mx-auto bg-white rounded-md p-4 shadow-md", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("h1", { className: "text-lg font-semibold text-gray-700", children: ["Corte de caja - #", cajaIndividual.id] }), _jsxs("button", { className: "btn bg-primary text-white", onClick: () => navigate("/dashboard/caja"), children: [_jsx("i", { className: "ri-arrow-left-s-line me-1" }), " Volver"] })] }), _jsxs("div", { className: "mt-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("p", { className: "text-gray-600", children: "ID:" }), _jsx("p", { className: "text-gray-800 font-semibold", children: cajaIndividual.id })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("p", { className: "text-gray-600", children: "Nombre:" }), _jsx("p", { className: "text-gray-800 font-semibold", children: cajaIndividual.responsable })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("p", { className: "text-gray-600", children: "Monto:" }), _jsx("p", { className: "text-gray-800 font-semibold", children: formatMxCurrency(cajaIndividual.total) })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("p", { className: "text-gray-600", children: "Fecha de creaci\u00F3n:" }), _jsx("p", { className: "text-gray-800 font-semibold", children: formatDateTime(cajaIndividual.fecha) })] }), _jsxs("div", { className: "flex flex-col items-start gap-2", children: [_jsx("p", { className: "text-gray-600", children: "Productos:" }), _jsx("nav", { className: "overflow-y-auto w-full h-40 border border-gray-300 rounded-md p-2", children: cajaIndividual.boxProducts.map((product) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("p", { className: "text-gray-600 font-semibold", children: ["Producto: ", _jsx("span", { className: "text-black font-black", children: product.product.name })] }), _jsx("p", { className: "text-primary font-black", children: "x" }), _jsxs("p", { className: "text-black font-black", children: [product.quantity, " Piezas"] }), _jsxs("p", { className: "text-gray-600 font-semibold", children: ["Total: ", _jsx("span", { className: "text-primary font-black", children: formatMxCurrency(product.product.price * product.quantity) })] })] }, product.id))) })] })] }), _jsx(Link, { to: `/dashboard/caja/print/${cajaIndividual.id}`, className: "btn bg-primary text-white mt-4 w-full", children: "Imprimir" })] })) }));
};
export default BoxId;
