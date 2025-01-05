import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ModalLayout } from '@/components/HeadlessUI';
import { useGlobalStore } from '@/store/Global/Global.store';
import { CloseBox } from '../Ventas/api/closeBox';
import { useVentasStore } from '@/store/Ventas/Ventas.store';
const CerrarCaja = () => {
    const modal = useGlobalStore((state) => state.modal);
    const ventas = useVentasStore((state) => state.ventas);
    const setModal = useGlobalStore((state) => state.setModal);
    const setAlert = useGlobalStore((state) => state.setAlert);
    const onClose = () => {
        setModal(false, null);
    };
    const handleCerrarCaja = async () => {
        const response = await CloseBox();
        const errorMessages = {
            400: "Error al cerrar la caja",
            403: "No tienes permisos para realizar esta acción",
            404: "El producto no existe",
            500: "Error interno",
        };
        if (response.status in errorMessages) {
            setAlert('error', errorMessages[response.status]);
            setTimeout(() => {
                setAlert('info', '');
            }, 1500);
            return;
        }
        if (ventas.length < 1) {
            setAlert('error', 'No hay ventas para cerrar');
            setTimeout(() => {
                setAlert('info', '');
            }, 1500);
            return;
        }
        setAlert("success", response.msg);
        setModal(false, null);
        setTimeout(() => {
            setAlert("info", "");
        }, 1500);
    };
    return (_jsx(ModalLayout, { showModal: modal.open, toggleModal: onClose, panelClassName: "sm:max-w-lg", placement: "justify-center items-start", children: _jsxs("div", { className: "duration-300 ease-in-out transition-all  m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800 dark:border-gray-700", children: [_jsxs("div", { className: `flex justify-between items-center py-2.5 px-4 bg-warning/90 dark:border-gray-700`, children: [_jsx("h3", { className: "font-medium text-white text-lg", children: "Modal Title" }), _jsx("button", { className: "inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200", type: "button", children: _jsx("i", { className: "ri-close-line text-2xl text-white", onClick: onClose }) })] }), _jsxs("div", { className: `p-4 bg-warning text-white overflow-y-auto`, children: [_jsx("h5", { className: "mb-2.5 text-base", children: "\u00BFEstas seguro/a de cerrar la caja?" }), _jsx("p", { className: "text-sm mb-4", children: "Al cerrar la caja se generar\u00E1 un reporte con las ventas del d\u00EDa y se eliminaran las ventas." }), _jsx("p", { className: "text-sm mb-4", children: "Una vez cerrada la caja no se podr\u00E1 deshacer esta acci\u00F3n." })] }), _jsxs("div", { className: `flex justify-end items-center gap-2 p-4 border-t bg-warning border-white/5`, children: [_jsx("button", { className: "btn bg-light text-gray-800 transition-all", onClick: onClose, children: "Cancelar" }), _jsx("button", { className: "btn border-light hover:bg-light hover:text-gray-800 text-white", onClick: handleCerrarCaja, children: "Cerrar caja" })] })] }) }));
};
export default CerrarCaja;
