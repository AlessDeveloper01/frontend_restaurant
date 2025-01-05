import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ModalLayout } from "@/components/HeadlessUI";
import { useGlobalStore } from "@/store/Global/Global.store";
import { deleteProduct } from "./api/DeleteProduct";
import { useInventarioStore } from "@/store/Inventario/Inventario.store";
const ToastDelete = () => {
    const setAlert = useGlobalStore((state) => state.setAlert);
    const modalDelete = useGlobalStore((state) => state.modalDelete);
    const setModalDelete = useGlobalStore((state) => state.setModalDelete);
    const setName = useInventarioStore((state) => state.setNombre);
    const setStock = useInventarioStore((state) => state.setStock);
    const setId = useInventarioStore((state) => state.setId);
    const id = useInventarioStore((state) => state.id);
    const deletedProduct = async () => {
        const data = await deleteProduct(id);
        setAlert("success", data.msg);
        setModalDelete(false);
        setName("");
        setStock(0);
        setId(0);
        setTimeout(() => {
            setAlert('info', '');
        }, 1000);
    };
    return (_jsx(ModalLayout, { showModal: modalDelete, toggleModal: () => setModalDelete(false), panelClassName: "sm:max-w-lg", placement: "justify-center items-start", children: _jsxs("div", { className: "duration-300 ease-in-out transition-all  m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800 dark:border-gray-700", children: [_jsxs("div", { className: `flex justify-between items-center py-2.5 px-4 bg-danger/90 dark:border-gray-700`, children: [_jsx("h3", { className: "font-medium text-white text-lg", children: "Eliminaci\u00F3n de producto" }), _jsx("button", { className: "inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200", type: "button", onClick: () => setModalDelete(false), children: _jsx("i", { className: "ri-close-line text-2xl text-white" }) })] }), _jsxs("div", { className: `p-4 bg-danger text-white overflow-y-auto`, children: [_jsx("h5", { className: "mb-2.5 text-base", children: "\u00BFEstas seguro de eliminar este producto?" }), _jsx("p", { className: "text-sm mb-4", children: "Una vez eliminado, no podr\u00E1 recuperar este producto." })] }), _jsxs("div", { className: `flex justify-end items-center gap-2 p-4 border-t bg-danger border-white/5`, children: [_jsx("button", { className: "btn bg-light text-gray-800 transition-all", onClick: () => setModalDelete(false), children: "Cancelar" }), _jsx("button", { className: "btn border-light hover:bg-light hover:text-gray-800 text-white", onClick: () => deletedProduct(), children: "Eliminar" })] })] }) }));
};
export default ToastDelete;
