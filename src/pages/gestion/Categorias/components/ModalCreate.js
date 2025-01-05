import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FormInput } from "@/components";
import { ModalLayout } from "@/components/HeadlessUI";
import { useCategorias } from "@/store/Categorias/Categorias.store";
import { useGlobalStore } from "@/store/Global/Global.store";
import { createCategory } from "../api/CreateCategory";
const ModalCreateCategory = () => {
    // Globals
    const modal = useGlobalStore((state) => state.modal);
    const setModal = useGlobalStore((state) => state.setModal);
    const alert = useGlobalStore((state) => state.alert);
    const setAlert = useGlobalStore((state) => state.setAlert);
    // Data de categoria
    const name = useCategorias((state) => state.name);
    const status = useCategorias((state) => state.status);
    const setName = useCategorias((state) => state.setName);
    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await createCategory(name, status);
        const errorMessages = {
            400: "El nombre de la categoría es requerido",
            401: "No tienes permisos para realizar esta acción",
            403: "No puedes eliminar tu propio usuario",
            404: "El usuario no existe",
            500: "Error interno",
        };
        if (response.status in errorMessages) {
            setAlert('error', errorMessages[response.status]);
            setTimeout(() => {
                setAlert('info', '');
            }, 1500);
            return;
        }
        setAlert('success', 'Categoría creada correctamente');
        setName('');
        setTimeout(() => {
            setAlert('info', '');
            setModal(false, null);
        }, 1000);
    };
    return (_jsx(_Fragment, { children: _jsx(ModalLayout, { showModal: modal.open, toggleModal: () => setModal(false, null), panelClassName: "sm:max-w-lg", placement: " justify-center items-start", children: _jsxs("div", { className: "duration-300 ease-in-out transition-all m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800", children: [_jsxs("div", { className: "flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700", children: [_jsx("h3", { className: "font-medium text-gray-600 dark:text-white text-lg", children: "Agregar categor\u00EDa al men\u00FA" }), _jsx("button", { className: "inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200", type: "button", children: _jsx("i", { className: "ri-close-line text-2xl", onClick: () => setModal(false, null) }) })] }), _jsxs("div", { className: `p-4 overflow-y-auto`, children: [_jsx("h5", { className: "mb-2.5 text-base", children: "Rellena todos los campos" }), alert.msg != "" &&
                                (alert.type === "error" ? (_jsxs("div", { id: `dismiss-example-1`, className: `border-0 text-white bg-danger rounded-md py-3 px-5 flex justify-between items-center`, children: [_jsxs("p", { children: [_jsx("span", { className: "font-bold", children: "Error:" }), " ", alert.msg] }), _jsx("button", { className: "text-xl/[0]", type: "button", children: _jsx("i", { className: "ri-close-line text-xl" }) })] })) : (_jsxs("div", { id: `dismiss-example-2`, className: `border-0 text-white bg-success rounded-md py-3 px-5 flex justify-between items-center`, children: [_jsxs("p", { children: [_jsx("span", { className: "font-bold", children: "\u00C9xito:" }), " ", alert.msg] }), _jsx("button", { className: "text-xl/[0]", type: "button", children: _jsx("i", { className: "ri-close-line text-xl" }) })] }))), _jsx("hr", { className: "my-5 dark:border-gray-700" }), _jsxs("form", { onSubmit: onSubmit, children: [_jsx(FormInput, { label: "Nombre de la categor\u00EDa", labelClassName: "font-semibold text-gray-500", type: "text", className: "form-input w-full md:w-96", name: "name", value: name, onChange: (e) => setName(e.target.value), placeholder: "Postres", containerClass: "mb-6 space-y-2" }), _jsxs("div", { className: "flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700", children: [_jsx("button", { className: "btn bg-light text-gray-800 transition-all", onClick: () => setModal(false, null), children: "Cerrar" }), _jsx("button", { className: "btn bg-primary text-white", type: "submit", children: "Crear categor\u00EDa" })] })] })] })] }) }) }));
};
export default ModalCreateCategory;
