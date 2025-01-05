import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import formatMxCurrency from "@/helpers/format-currency";
import { useOrdenStore } from "@/store/Orden/Orden.store";
const CardItem = ({ item }) => {
    const addOrden = useOrdenStore((state) => state.addItem);
    const ItemQ = { item, quantity: 1 };
    return (_jsx("button", { className: "card border border-warning relative", type: "button", onClick: () => addOrden(ItemQ), children: _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-base font-bold text-secondary dark:text-white mb-2 uppercase", children: item.name }), _jsxs("p", { className: "mt-1 text-gray-800 dark:text-gray-400 mb-3", children: ["Precio:", " ", _jsx("span", { className: "text-xl font-black text-orange-500", children: formatMxCurrency(item.price) })] }), _jsx("p", { className: "absolute -top-2 right-0 p-4 text-black text-center uppercase font-bold text-xs", children: "Presionarme" })] }) }, item.id));
};
export default CardItem;
