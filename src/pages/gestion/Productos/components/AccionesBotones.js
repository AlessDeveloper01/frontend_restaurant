import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AccionesBotones = ({ onClickDelete, onClickEdit }) => {
    return (_jsxs("div", { className: 'grid grid-cols-1 gap-4 md:grid-cols-2', children: [_jsxs("button", { className: 'btn bg-primary text-white', onClick: onClickEdit, children: [_jsx("i", { className: 'ri-pencil-line me-1' }), " Editar"] }), _jsxs("button", { className: 'btn bg-danger text-white', onClick: onClickDelete, children: [_jsx("i", { className: 'ri-delete-bin-line me-1' }), " Eliminar"] })] }));
};
export default AccionesBotones;
