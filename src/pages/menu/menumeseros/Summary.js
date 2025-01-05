import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useOrdenStore } from "@/store/Orden/Orden.store";
import CardMenu from "./components/CardMenu";
import formatMxCurrency from "@/helpers/format-currency";
import { CreateOrder } from "./api/CreateOrder";
import { useGlobalStore } from "@/store/Global/Global.store";
import { UpdateOrder } from "./api/UpdateOrder";
import { useNavigate } from "react-router-dom";
const SummaryMenu = () => {
    const navigate = useNavigate();
    const orden = useOrdenStore((state) => state.orden);
    const clearOrden = useOrdenStore((state) => state.clearOrden);
    const total = useOrdenStore((state) => state.getTotal());
    const setAlert = useGlobalStore((state) => state.setAlert);
    const idOrder = useOrdenStore((state) => state.idOrden);
    const setIdOrden = useOrdenStore((state) => state.setIdOrden);
    const handleCreateOrder = async () => {
        const data = {
            total: total,
            date: new Date(),
            products: orden.map((orden) => ({
                productId: orden.item.id,
                quantity: orden.quantity,
            })),
        };
        const response = await CreateOrder(data);
        const errorMessages = {
            400: "Error al crear la orden",
            401: "No autorizado",
            403: "No tienes permisos",
            404: "No encontrado",
            500: "Error en el servidor",
        };
        if (response.status in errorMessages) {
            setAlert("error", errorMessages[response.status]);
            setTimeout(() => {
                setAlert("info", "");
            }, 1500);
            return;
        }
        setAlert("success", response.msg);
        clearOrden();
        setTimeout(() => {
            setAlert("info", "");
        }, 1500);
    };
    const handleUpdateOrder = async () => {
        const data = {
            total: total,
            date: new Date(),
            products: orden.map((orden) => ({
                productId: orden.item.id,
                quantity: orden.quantity,
            })),
        };
        const response = await UpdateOrder(idOrder, data);
        const errorMessages = {
            400: "Error al crear la orden",
            401: "No autorizado",
            403: "No tienes permisos",
            404: "No encontrado",
            500: "Error en el servidor",
        };
        if (response.status in errorMessages) {
            setAlert("error", errorMessages[response.status]);
            setTimeout(() => {
                setAlert("info", "");
            }, 1500);
            return;
        }
        setAlert("success", response.msg);
        clearOrden();
        setIdOrden(0);
        setTimeout(() => {
            setAlert("info", "");
        }, 1500);
    };
    const handleCancelOrder = async () => {
        clearOrden();
        setIdOrden(0);
        navigate(-1);
    };
    return (_jsxs("div", { className: "bg-white p-5 mt-5 rounded-md border border-gray-200 w-full", children: [_jsx("div", { className: "flex justify-between items-center mt-5", children: _jsx("h2", { className: "card-title", children: "Resumen de la orden del cliente" }) }), _jsxs("div", { className: "mt-5", children: [_jsx("ul", { className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: orden.map((orden, idx) => (_jsx(CardMenu, { orden: orden }, idx))) }), _jsx("div", { className: "mt-3 text-right", children: _jsxs("span", { className: "font-bold text-lg", children: ["Total: ", formatMxCurrency(total)] }) })] }), _jsx("div", { className: "mt-5", children: idOrder === 0 ? (_jsxs("button", { className: "btn bg-primary text-white w-full lg:w-auto lg:float-right", onClick: () => handleCreateOrder(), children: [_jsx("i", { className: "ri-add-line me-1" }), " Agregar a la orden"] })) : (_jsxs("div", { className: "flex gap-3 justify-end", children: [_jsxs("button", { className: "btn bg-success text-white w-full lg:w-auto lg:float-right", onClick: () => handleUpdateOrder(), children: [_jsx("i", { className: "ri-add-line me-1" }), " Actualizar orden"] }), _jsxs("button", { className: "btn bg-danger text-white w-full lg:w-auto lg:float-right", onClick: () => handleCancelOrder(), children: [_jsx("i", { className: "ri-close-line me-1" }), " Cancelar"] })] })) })] }));
};
export default SummaryMenu;
