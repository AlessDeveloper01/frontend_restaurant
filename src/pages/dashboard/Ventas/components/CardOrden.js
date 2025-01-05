import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import formatMxCurrency from "@/helpers/format-currency";
import { Link } from "react-router-dom";
import { updateOrder } from "../api/updateOrder";
import { useGlobalStore } from "@/store/Global/Global.store";
const CardOrden = ({ venta }) => {
    const setAlert = useGlobalStore((state) => state.setAlert);
    const handleOrdenLista = async () => {
        const data = {
            status: false,
            id: venta.id
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
        setTimeout(() => {
            setAlert("info", "");
        }, 1000);
    };
    return (_jsx("div", { className: `card border border-primary`, children: _jsxs("div", { className: "p-6", children: [_jsxs("h3", { className: "text-base font-bold text-secondary dark:text-white mb-2", children: ["Orden #", venta.id, " - Mesero: ", venta.mesero] }), _jsx("p", { className: "mt-3 text-gray-800 dark:text-gray-400 mb-3 uppercase font-bold", children: "Productos Ordenados" }), (() => {
                    const categories = venta.orderProducts.reduce((acc, product) => {
                        const category = product.product.category;
                        if (!acc[category]) {
                            acc[category] = [];
                        }
                        acc[category].push(product);
                        return acc;
                    }, {});
                    return Object.keys(categories).map((category) => {
                        const categoryNumber = Number(category);
                        return (_jsxs("div", { children: [_jsx("h4", { className: "text-lg font-semibold mt-4", children: "==========================" }), _jsx("ul", { className: "list-disc list-inside text-gray-800 dark:text-gray-400 mb-3", children: categories[categoryNumber].map((product) => (_jsxs("li", { className: "mb-1 text-lg", children: [product.product.name, " - ", _jsx("span", { className: "text-primary font-black", children: product.quantity }), " x ", _jsx("span", { className: "font-black text-primary", children: formatMxCurrency(product.product.price) })] }, product.id))) })] }, categoryNumber));
                    });
                })(), _jsxs("div", { className: "mt-3 text-gray-800 dark:text-gray-400 mb-3 uppercase font-bold text-right text-xl", children: ["Total: ", formatMxCurrency(venta.total)] }), _jsxs("div", { className: "flex gap-3.5 flex-col lg:flex-row", children: [_jsx(Link, { className: `btn bg-primary text-white mt-2 flex-1`, to: `/print/${venta.id}`, children: "Imprimir" }), _jsx("button", { className: `btn bg-success text-white mt-2 flex-1`, onClick: handleOrdenLista, children: "Regresar orden a cocina" })] })] }) }));
};
export default CardOrden;
