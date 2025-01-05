import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useModalStore } from '@/store';
import { useGlobalStore } from '@/store/Global/Global.store';
const AccionesButtons = ({ onClick }) => {
    const setModalDelete = useGlobalStore(state => state.setModalDelete);
    const setModalUpdate = useModalStore(state => state.handleModal);
    return (_jsxs("div", { className: 'grid grid-cols-1 gap-4 md:grid-cols-2', children: [_jsxs("button", { className: 'btn bg-primary text-white', onClick: () => {
                    onClick();
                    setModalUpdate(1);
                }, children: [_jsx("i", { className: 'ri-pencil-line me-1' }), " Editar"] }), _jsxs("button", { className: 'btn bg-danger text-white', onClick: () => {
                    setModalDelete(true);
                    onClick();
                }, children: [_jsx("i", { className: 'ri-delete-bin-line me-1' }), " Eliminar"] })] }));
};
export default AccionesButtons;
