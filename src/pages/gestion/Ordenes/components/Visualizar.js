import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Visualizar = ({ onClickVer, onClickImprimir }) => {
    return (_jsxs("div", { className: "grid md:grid-cols-2 gap-2", children: [_jsx("button", { className: "btn bg-primary text-white hover:bg-primary/40 font-black uppercase", onClick: onClickVer, children: "Ver" }), _jsx("button", { className: "btn bg-warning text-white hover:bg-warning/40 font-black uppercase", onClick: onClickImprimir, children: "Imprimir" })] }));
};
export default Visualizar;
