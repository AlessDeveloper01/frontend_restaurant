import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../api/getOrderById";
import './style.css';
import { formatDate } from "@/helpers/format-date";
import formatMxCurrency from "@/helpers/format-currency";
const Ticket = () => {
    const { id } = useParams();
    const [order, setOrder] = useState();
    useEffect(() => {
        const getOrder = async () => {
            const idNumber = Number(id);
            const response = await getOrderById(idNumber);
            setOrder(response);
        };
        getOrder();
    }, [id]);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "ticket", children: [_jsx("img", { src: "/image.png", alt: "Logo", className: "logo" }), _jsxs("p", { className: "centrado", children: [_jsx("br", {}), "Restaurant La Perla", _jsx("br", {}), "Fecha Ticket: ", formatDate(order?.date ?? ''), _jsx("br", {}), "Impreso: ", new Date().toLocaleString(), _jsx("br", {}), "Mesero: ", order?.mesero] }), _jsxs("table", { className: "table", children: [_jsx("thead", { className: "thead", children: _jsxs("tr", { className: "tr", children: [_jsx("th", { className: "cantidad", children: "Cantidad" }), _jsx("th", { className: "producto", children: "Producto" }), _jsx("th", { className: "precio", children: "$$" })] }) }), _jsxs("tbody", { children: [order?.orderProducts.map((product) => (_jsxs("tr", { className: "tr", children: [_jsx("td", { className: "cantidad", children: product.quantity }), _jsx("td", { className: "producto", children: product.product.name }), _jsx("td", { className: "precio", children: formatMxCurrency(product.product.price) })] }, product.id))), _jsxs("tr", { className: "tr", children: [_jsx("td", { className: "cantidad" }), _jsx("td", { className: "producto", children: "Total" }), _jsx("td", { className: "precio", children: formatMxCurrency(order?.total ?? 0) })] })] })] }), _jsx("p", { className: "centrado", children: "Gracias por su preferencia" })] }), _jsx("button", { className: "mt-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded oculto-impresion", onClick: () => window.print(), children: "Imprimir" })] }));
};
export default Ticket;
