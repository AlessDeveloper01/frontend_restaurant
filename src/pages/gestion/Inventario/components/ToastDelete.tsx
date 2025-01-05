import { ModalLayout } from "@/components/HeadlessUI";
import { useGlobalStore } from "@/store/Global/Global.store";
import React from "react";
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
    }

    return (
        <ModalLayout
            showModal={modalDelete}
            toggleModal={() => setModalDelete(false)}
            panelClassName="sm:max-w-lg"
            placement="justify-center items-start">
            <div className="duration-300 ease-in-out transition-all  m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800 dark:border-gray-700">
                <div
                    className={`flex justify-between items-center py-2.5 px-4 bg-danger/90 dark:border-gray-700`}>
                    <h3 className="font-medium text-white text-lg">
                        Eliminación de producto
                    </h3>
                    <button
                        className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
                        type="button"
                        onClick={() => setModalDelete(false)}>
                        <i className="ri-close-line text-2xl text-white"></i>
                    </button>
                </div>
                <div className={`p-4 bg-danger text-white overflow-y-auto`}>
                    <h5 className="mb-2.5 text-base">
                        ¿Estas seguro de eliminar este producto?
                    </h5>
                    <p className="text-sm mb-4">
                        Una vez eliminado, no podrá recuperar este producto.
                    </p>
                </div>
                <div
                    className={`flex justify-end items-center gap-2 p-4 border-t bg-danger border-white/5`}>
                    <button
                        className="btn bg-light text-gray-800 transition-all"
                        onClick={() => setModalDelete(false)}>
                        Cancelar
                    </button>
                    <button
                        className="btn border-light hover:bg-light hover:text-gray-800 text-white"
                        onClick={() => deletedProduct()}>
                        Eliminar
                    </button>
                </div>
            </div>
        </ModalLayout>
    );
};

export default ToastDelete;
