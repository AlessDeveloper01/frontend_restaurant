import { jsx as _jsx } from "react/jsx-runtime";
const Badges = ({ activo }) => {
    return (_jsx("div", { children: _jsx("span", { className: `inline-flex items-center gap-1.5 py-0.5 px-1.5 rounded-md text-xs font-medium border ${activo
                ? "border-success text-success"
                : "border-danger text-danger"}`, children: activo ? "Activo" : "Inactivo" }) }));
};
export default Badges;
