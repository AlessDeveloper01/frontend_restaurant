import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { ModalLayout } from "@/components/HeadlessUI";
import { useGlobalStore } from "@/store/Global/Global.store";
import { deleteCategory } from "../api/DeleteCategory";
import { useCategorias } from "@/store/Categorias/Categorias.store";
const ModalDeleteCategory = () => {
    const alert = useGlobalStore((state) => state.alert);
    const setAlert = useGlobalStore((state) => state.setAlert);
    const modalDelete = useGlobalStore((state) => state.modalDelete);
    const setModalDelete = useGlobalStore((state) => state.setModalDelete);
    const setId = useCategorias((state) => state.setId);
    const name = useCategorias((state) => state.name);
    const setName = useCategorias((state) => state.setName);
    const id = useCategorias((state) => state.id);
    const deletedProduct = async () => {
        const response = await deleteCategory(id);
        const errorMessages = {
            400: "Petición incorrecta",
            401: "No tienes permisos para realizar esta acción",
            403: "No puedes eliminar tu propio usuario",
            404: "Categoría no encontrada",
            500: "Error interno",
        };
        if (response.status in errorMessages) {
            setAlert('error', errorMessages[response.status]);
            setTimeout(() => {
                setAlert('info', '');
            }, 1500);
            return;
        }
        setAlert('success', response.msg);
        setTimeout(() => {
            setName('');
            setId(0);
            setAlert('info', '');
            setModalDelete(false);
        }, 1000);
    };
    return (_jsx(ModalLayout, { showModal: modalDelete, toggleModal: () => {
            setModalDelete(false);
            setName('');
            setId(0);
        }, panelClassName: "sm:max-w-lg", placement: "justify-center items-start", children: _jsxs("div", { className: "duration-300 ease-in-out transition-all  m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800 dark:border-gray-700", children: [_jsxs("div", { className: `flex justify-between items-center py-2.5 px-4 bg-danger/90 dark:border-gray-700`, children: [_jsxs("h3", { className: "font-medium text-white text-lg", children: ["Eliminaci\u00F3n de categor\u00EDa - ", name] }), _jsx("button", { className: "inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200", type: "button", onClick: () => {
                                setModalDelete(false);
                                setName('');
                                setId(0);
                            }, children: _jsx("i", { className: "ri-close-line text-2xl text-white" }) })] }), alert.msg !== '' && (alert.type === 'error' ? (_jsx("div", { className: "bg-danger/10 text-danger border border-danger/20 text-sm rounded-md py-3 px-5 mb-2", children: _jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx("i", { className: `ri-close-circle-line text-base` }), _jsxs("p", { className: "text-sm", children: ["Error: ", _jsx("span", { className: "font-bold", children: alert.msg })] })] }) })) : (_jsx("div", { className: "bg-success/10 text-success border border-success/20 text-sm rounded-md py-3 px-5 mb-2", children: _jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx("i", { className: `ri-check-line text-base` }), _jsxs("p", { className: "text-sm", children: ["Exito: ", _jsx("span", { className: "font-bold", children: alert.msg })] })] }) }))), _jsxs("div", { className: `p-4 bg-danger text-white overflow-y-auto`, children: [_jsx("h5", { className: "mb-2.5 text-base", children: "\u00BFEstas seguro de eliminar esta categor\u00EDa?" }), _jsx("p", { className: "text-sm mb-4", children: "Una vez eliminado, no podr\u00E1 recuperar esta categor\u00EDa." })] }), _jsxs("div", { className: `flex justify-end items-center gap-2 p-4 border-t bg-danger border-white/5`, children: [_jsx("button", { className: "btn bg-light text-gray-800 transition-all", onClick: () => {
                                setModalDelete(false);
                                setName('');
                                setId(0);
                            }, children: "Cancelar" }), _jsx("button", { className: "btn border-light hover:bg-light hover:text-gray-800 text-white", onClick: () => deletedProduct(), children: "Eliminar" })] })] }) }));
};
export default ModalDeleteCategory;
