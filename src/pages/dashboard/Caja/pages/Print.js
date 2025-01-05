import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCajaStore } from "@/store/Caja/Caja.store";
import checkPermissions from "@/utils/checkPermissions";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getResumeBox } from "../api/getBoxId";
import formatMxCurrency from "@/helpers/format-currency";
import '../../Ventas/components/style.css';
import { formatDate } from "@/helpers/format-date";
const PrintBox = () => {
    const navigate = useNavigate();
    const cajaIndividual = useCajaStore((state) => state.cajaIndividual);
    const setCajaIndividual = useCajaStore((state) => state.setCajaIndividual);
    useEffect(() => {
        const checkPermissionsAsync = async () => {
            const check = await checkPermissions(["6"]);
            if (!check) {
                navigate("/dashboard/caja");
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
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "ticket", children: [_jsx("img", { src: "/image.png", alt: "Logo", className: "logo" }), _jsxs("p", { className: "centrado", children: [_jsx("br", {}), "Restaurant La Perla", _jsx("br", {}), "Fecha Corte: ", formatDate(cajaIndividual?.fecha ?? ''), _jsx("br", {}), "Impreso: ", new Date().toLocaleString(), _jsx("br", {}), "Responsable: ", cajaIndividual?.responsable] }), _jsxs("table", { className: "table", children: [_jsx("thead", { className: "thead", children: _jsxs("tr", { className: "tr", children: [_jsx("th", { className: "cantidad", children: "Cantidad" }), _jsx("th", { className: "producto", children: "Producto" }), _jsx("th", { className: "precio", children: "$$" })] }) }), _jsxs("tbody", { children: [cajaIndividual?.boxProducts.map((product) => (_jsxs("tr", { className: "tr", children: [_jsx("td", { className: "cantidad", children: product.quantity }), _jsx("td", { className: "producto", children: product.product?.name }), _jsx("td", { className: "precio", children: formatMxCurrency(product.product.price) })] }, product.id))), _jsxs("tr", { className: "tr", children: [_jsx("td", { className: "cantidad" }), _jsx("td", { className: "producto", children: "Total" }), _jsx("td", { className: "precio", children: formatMxCurrency(cajaIndividual?.total ?? 0) })] })] })] }), _jsx("p", { className: "centrado", children: "Gracias por su preferencia" })] }), _jsx("button", { className: "mt-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded oculto-impresion", onClick: () => window.print(), children: "Imprimir" })] }));
};
export default PrintBox;
