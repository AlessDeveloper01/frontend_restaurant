import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import formatMxCurrency from "@/helpers/format-currency";
import { useOrdenStore } from "@/store/Orden/Orden.store";
const CardMenu = ({ orden }) => {
    const { item, quantity } = orden;
    const updateItem = useOrdenStore(state => state.updateItem);
    const removeItem = useOrdenStore((state) => state.removeItem);
    const handleUpdateDecrement = (id, quantity) => {
        if (quantity <= 1) {
            removeItem(id);
        }
        updateItem(id, quantity - 1);
    };
    return (_jsxs("div", { className: "card mb-2 bg-slate-100 p-2 relative", children: [_jsxs("div", { className: "p-2", children: [_jsx("h3", { className: "card-title pb-2", children: item.name }), _jsxs("p", { className: "text-gray-400", children: ["Subtotal: ", _jsx("span", { className: "font-bold text-orange-500", children: formatMxCurrency(item.price) }), " ", "x ", quantity] }), _jsxs("p", { className: "text-gray-400", children: ["Total: ", _jsx("span", { className: "font-bold text-orange-500", children: formatMxCurrency(item.price * quantity) })] })] }), _jsx("hr", {}), _jsxs("div", { className: "flex justify-between items-center p-2", children: [_jsx("button", { className: "btn bg-danger text-white", onClick: () => handleUpdateDecrement(item.id, quantity), children: _jsx("i", { className: "ri-subtract-line" }) }), _jsx("p", { className: "text-xl", children: _jsx("span", { className: "font-bold", children: quantity }) }), _jsx("button", { className: "btn bg-primary text-white", onClick: () => updateItem(item.id, quantity + 1), children: _jsx("i", { className: "ri-add-line" }) })] }), _jsx("div", { className: "absolute top-2 right-2", children: _jsx("button", { className: "btn bg-danger text-white", onClick: () => removeItem(item.id), children: _jsx("i", { className: "ri-delete-bin-line" }) }) })] }));
};
export default CardMenu;
