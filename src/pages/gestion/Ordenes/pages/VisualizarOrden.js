import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import formatMxCurrency from "@/helpers/format-currency";
import { formatDateTime } from "@/helpers/format-date-hour";
import { updateOrder } from "@/pages/dashboard/Ventas/api/updateOrder";
import { useGlobalStore } from "@/store/Global/Global.store";
import { useOrdenStore } from "@/store/Orden/Orden.store";
import { useVentasStore } from "@/store/Ventas/Ventas.store";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ModalDeleteOrder from "../components/ModalDelete";
import { getOrdenById } from "../api/getOrdenById";
const VisualizarOrden = () => {
    const { id } = useParams();
    const setItemOrden = useVentasStore((state) => state.setOrden);
    const orden = useVentasStore((state) => state.orden);
    const navigate = useNavigate();
    const setAlert = useGlobalStore((state) => state.setAlert);
    const setIdOrden = useOrdenStore((state) => state.setIdOrden);
    const setOrden = useOrdenStore((state) => state.setOrden);
    const modal = useGlobalStore((state) => state.modal);
    const setModal = useGlobalStore((state) => state.setModal);
    useEffect(() => {
        const ordenOne = async () => {
            const ordenById = await getOrdenById(Number(id));
            setItemOrden(ordenById);
        };
        ordenOne();
    }, [id]);
    const handleOrdenLista = async () => {
        const data = {
            status: true,
            id: orden.id,
        };
        const response = await updateOrder(data);
        const errorMessages = {
            400: "Error al actualizar la orden",
            401: "No tienes permisos para actualizar la orden",
            402: "Error al actualizar la orden",
            403: "Error al actualizar la orden",
            404: "No se encontró la orden",
            500: "Error en el servidor",
        };
        for (const key in errorMessages) {
            if (response.status === Number(key)) {
                setAlert("error", errorMessages[key]);
            }
        }
        setAlert("success", "Orden actualizada correctamente");
        navigate("/dashboard/ordenes");
        setTimeout(() => {
            setAlert("info", "");
        }, 1000);
    };
    const handleOrdenEdit = async () => {
        setIdOrden(orden.id);
        setOrden(orden.orderProducts.map((item) => {
            return {
                item: {
                    id: item.product.id,
                    name: item.product.name,
                    price: item.product.price,
                    category: item.product.category,
                    status: item.product.status,
                    ingredient: [],
                    categoryDetails: undefined,
                },
                quantity: item.quantity,
            };
        }));
        navigate("/menu/postres");
    };
    const backPage = () => {
        navigate("/dashboard/ordenes");
    };
    return (_jsx(_Fragment, { children: _jsxs(_Fragment, { children: [_jsxs("div", { className: `card border border-primary`, children: [_jsx("button", { className: "w-full p-6 bg-primary text-white font-bold text-center uppercase", onClick: backPage, children: "Regresar a la lista de ordenes" }), _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("h3", { className: "lg:text-2xl font-bold text-secondary dark:text-white mb-2", children: ["Orden #", orden.id, " - Mesero: ", orden.mesero] }), _jsx("p", { className: "lg:text-2xl font-bold text-secondary dark:text-white mb-2", children: formatDateTime(orden.date) })] }), _jsx("p", { className: "mt-3 text-gray-800 dark:text-gray-400 mb-3 uppercase font-bold text-xl", children: "Productos Ordenados" }), orden.orderProducts.map((item) => (_jsx("div", { className: "flex justify-between items-center", children: _jsxs("li", { className: "mb-1 text-lg", children: [item.product.name, " -", " ", _jsx("span", { className: "text-primary font-black", children: item.quantity }), " ", "x", " ", _jsx("span", { className: "font-black text-primary", children: formatMxCurrency(item.product.price) })] }, item.product.id) }, item.product.id))), _jsxs("div", { className: "mt-3 text-gray-800 dark:text-gray-400 mb-3 uppercase font-bold text-right text-xl", children: ["Total: ", formatMxCurrency(orden.total)] }), _jsxs("div", { className: "flex gap-3.5 flex-col uppercase font-black lg:grid lg:grid-cols-2", children: [_jsx("button", { className: `btn bg-warning text-white mt-2 flex-1 uppercase font-black p-5`, onClick: handleOrdenEdit, children: "Editar" }), _jsx("button", { className: `btn bg-danger text-white mt-2 flex-1 uppercase font-black p-5`, onClick: () => {
                                                setIdOrden(orden.id);
                                                setModal(true, _jsx(ModalDeleteOrder, {}));
                                            }, children: "Eliminar" }), _jsx(Link, { className: `btn bg-primary text-white mt-2 flex-1 p-5`, to: `/print/${orden.id}`, children: "Imprimir" }), _jsx("button", { className: `btn bg-success text-white mt-2 flex-1 uppercase font-black p-5`, onClick: handleOrdenLista, children: "Marcar como lista" })] })] })] }), modal.open && modal.component] }) }));
};
export default VisualizarOrden;
