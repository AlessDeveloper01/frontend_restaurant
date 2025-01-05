import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FormInput } from '@/components';
import { ModalLayout } from '@/components/HeadlessUI';
import { useModalStore } from '@/store';
import { useGlobalStore } from '@/store/Global/Global.store';
import { useInventarioStore } from '@/store/Inventario/Inventario.store';
import { updateProduct } from './api/UpdateProduct';
const ModalUpdateProduct = () => {
    const isModalOpen = useModalStore((state) => state.isModalOpen);
    const handleModal = useModalStore((state) => state.handleModal);
    const alert = useGlobalStore((state) => state.alert);
    const setAlert = useGlobalStore((state) => state.setAlert);
    // Datos del producto (state)
    const name = useInventarioStore((state) => state.name);
    const stock = useInventarioStore((state) => state.stock);
    const id = useInventarioStore((state) => state.id);
    const setId = useInventarioStore((state) => state.setId);
    const setName = useInventarioStore((state) => state.setNombre);
    const setStock = useInventarioStore((state) => state.setStock);
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!name || !stock) {
            setAlert("error", "Debes rellenar todos los campos");
            setTimeout(() => {
                setAlert("info", "");
            }, 1000);
            return;
        }
        const data = await updateProduct(id, name, stock);
        if (data.error) {
            setAlert("error", data.error);
            setTimeout(() => {
                setAlert("info", "");
            }, 1000);
            return;
        }
        setAlert("success", data.msg);
        setTimeout(() => {
            setAlert("info", "");
            closeModal();
        }, 1500);
    };
    const closeModal = () => {
        handleModal(0);
        setId(0);
        setName("");
        setStock(0);
    };
    return (_jsx(_Fragment, { children: _jsx(ModalLayout, { showModal: isModalOpen === 1, toggleModal: () => closeModal(), panelClassName: "sm:max-w-lg", placement: " justify-center items-start", children: _jsxs("div", { className: "duration-300 ease-in-out transition-all m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800", children: [_jsxs("div", { className: "flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700", children: [_jsxs("h3", { className: "font-medium text-gray-600 dark:text-white text-lg", children: ["Actualizando el producto - ", _jsx("span", { className: "font-black", children: name })] }), _jsx("button", { className: "inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200", type: "button", children: _jsx("i", { className: "ri-close-line text-2xl", onClick: () => closeModal() }) })] }), _jsxs("div", { className: `p-4 overflow-y-auto`, children: [_jsx("h5", { className: "mb-2.5 text-base", children: "Actualiza los datos del producto" }), alert.msg != "" &&
                                (alert.type === "error" ? (_jsxs("div", { id: `dismiss-example-1`, className: `border-0 text-white bg-danger rounded-md py-3 px-5 flex justify-between items-center`, children: [_jsxs("p", { children: [_jsx("span", { className: "font-bold", children: "Error:" }), " ", alert.msg] }), _jsx("button", { className: "text-xl/[0]", type: "button", children: _jsx("i", { className: "ri-close-line text-xl" }) })] })) : (_jsxs("div", { id: `dismiss-example-2`, className: `border-0 text-white bg-success rounded-md py-3 px-5 flex justify-between items-center`, children: [_jsxs("p", { children: [_jsx("span", { className: "font-bold", children: "\u00C9xito:" }), " ", alert.msg] }), _jsx("button", { className: "text-xl/[0]", type: "button", children: _jsx("i", { className: "ri-close-line text-xl" }) })] }))), _jsx("hr", { className: "my-5 dark:border-gray-700" }), _jsxs("form", { onSubmit: onSubmit, children: [_jsx(FormInput, { label: "Nombre del producto", labelClassName: "font-semibold text-gray-500", type: "text", className: "form-input w-full md:w-96", name: "name", value: name, onChange: (e) => setName(e.target.value), placeholder: "Coca cola", containerClass: "mb-6 space-y-2" }), _jsx(FormInput, { label: "Cantidad", labelClassName: "font-semibold text-gray-500", type: "number", className: "form-input w-full md:w-96", name: "stock", value: stock, onChange: (e) => setStock(Number(e.target.value)), placeholder: "30", containerClass: "mb-6 space-y-2", min: "0" }), _jsxs("div", { className: "flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700", children: [_jsx("button", { className: "btn bg-light text-gray-800 transition-all", onClick: () => closeModal(), children: "Cerrar" }), _jsx("button", { className: "btn bg-primary text-white", type: "submit", children: "Actualizar producto" })] })] })] })] }) }) }));
};
export default ModalUpdateProduct;
