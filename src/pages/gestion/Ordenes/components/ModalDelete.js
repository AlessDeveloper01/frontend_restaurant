import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ModalLayout } from '@/components/HeadlessUI';
import { useGlobalStore } from '@/store/Global/Global.store';
import { useOrdenStore } from '@/store/Orden/Orden.store';
import { deleteOrden } from '../api/deleteOrden';
import { useNavigate } from 'react-router-dom';
const ModalDeleteOrder = () => {
    const id = useOrdenStore((state) => state.idOrden);
    const alert = useGlobalStore((state) => state.alert);
    const setAlert = useGlobalStore((state) => state.setAlert);
    const modalDelete = useGlobalStore((state) => state.modal);
    const setModalDelete = useGlobalStore((state) => state.setModal);
    const setId = useOrdenStore((state) => state.setIdOrden);
    const navigate = useNavigate();
    const handleOrdenDelete = async () => {
        const response = await deleteOrden(id);
        const errorMessages = {
            400: "Error al eliminar la orden",
            401: "No tienes permisos para eliminar la orden",
            402: "Error al eliminar la orden",
            403: "Error al eliminar la orden",
            404: "No se encontró la orden",
            500: "Error en el servidor",
        };
        for (response.status in errorMessages) {
            setAlert('error', errorMessages[response.status]);
            setTimeout(() => {
                setAlert('info', '');
            }, 1500);
            return;
        }
        if (response.status !== 200) {
            setAlert('error', 'Error al eliminar la orden');
            setTimeout(() => {
                setAlert('info', '');
            }, 1500);
            return;
        }
        setAlert("success", response.msg);
        setModalDelete(false, null);
        setId(0);
        navigate("/dashboard/ordenes");
        setTimeout(() => {
            setAlert("info", "");
        }, 1000);
    };
    return (_jsx(ModalLayout, { showModal: modalDelete.open, toggleModal: () => {
            setModalDelete(false, null);
            setId(0);
        }, panelClassName: "sm:max-w-lg", placement: "justify-center items-start", children: _jsxs("div", { className: "duration-300 ease-in-out transition-all  m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800 dark:border-gray-700", children: [_jsxs("div", { className: `flex justify-between items-center py-2.5 px-4 bg-danger/90 dark:border-gray-700`, children: [_jsx("h3", { className: "font-medium text-white text-lg", children: "Eliminaci\u00F3n de orden" }), _jsx("button", { className: "inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200", type: "button", onClick: () => {
                                setModalDelete(false, null);
                                setId(0);
                            }, children: _jsx("i", { className: "ri-close-line text-2xl text-white" }) })] }), alert.msg !== '' && (alert.type === 'error' ? (_jsx("div", { className: "bg-danger/10 text-danger border border-danger/20 text-sm rounded-md py-3 px-5 mb-2", children: _jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx("i", { className: `ri-close-circle-line text-base` }), _jsxs("p", { className: "text-sm", children: ["Error: ", _jsx("span", { className: "font-bold", children: alert.msg })] })] }) })) : (_jsx("div", { className: "bg-success/10 text-success border border-success/20 text-sm rounded-md py-3 px-5 mb-2", children: _jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx("i", { className: `ri-check-line text-base` }), _jsxs("p", { className: "text-sm", children: ["Exito: ", _jsx("span", { className: "font-bold", children: alert.msg })] })] }) }))), _jsxs("div", { className: `p-4 bg-danger text-white overflow-y-auto`, children: [_jsx("h5", { className: "mb-2.5 text-base", children: "\u00BFEstas seguro de eliminar esta categor\u00EDa?" }), _jsx("p", { className: "text-sm mb-4", children: "Una vez eliminado, no podr\u00E1 recuperar esta categor\u00EDa." })] }), _jsxs("div", { className: `flex justify-end items-center gap-2 p-4 border-t bg-danger border-white/5`, children: [_jsx("button", { className: "btn bg-light text-gray-800 transition-all", onClick: () => {
                                setModalDelete(false, null);
                                setId(0);
                            }, children: "Cancelar" }), _jsx("button", { className: "btn border-light hover:bg-light hover:text-gray-800 text-white", onClick: handleOrdenDelete, children: "Eliminar" })] })] }) }));
};
export default ModalDeleteOrder;
