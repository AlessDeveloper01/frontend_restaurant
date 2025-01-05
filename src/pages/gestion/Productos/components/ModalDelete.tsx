import { ModalLayout } from "@/components/HeadlessUI";
import { useGlobalStore } from "@/store/Global/Global.store";
import React from "react";
import { useProductoStore } from "@/store/Productos/Producto.store";
import { deleteProductMenu } from "../api/DeleteProductMenu";

const ModalDeleteProductMenu = () => {
    const alert = useGlobalStore((state) => state.alert);
    const setAlert = useGlobalStore((state) => state.setAlert);
    const modal = useGlobalStore((state) => state.modal);
    const setModal = useGlobalStore((state) => state.setModal);
    const setId = useProductoStore((state) => state.setId);
    const name = useProductoStore((state) => state.name);
    const setName = useProductoStore((state) => state.setName);
    const id = useProductoStore((state) => state.id);

    const deletedProduct = async () => {
        
        const response = await deleteProductMenu(id);

        const errorMessages: { [key: number]: string } = {
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
            setModal(false, null);
        }, 1000);
    }

    return (
        <ModalLayout
            showModal={modal.open}
            toggleModal={() => {
                setModal(false, null);
                setName('')
                setId(0)
            }}
            panelClassName="sm:max-w-lg"
            placement="justify-center items-start">
            <div className="duration-300 ease-in-out transition-all  m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800 dark:border-gray-700">
                <div
                    className={`flex justify-between items-center py-2.5 px-4 bg-danger/90 dark:border-gray-700`}>
                    <h3 className="font-medium text-white text-lg">
                        Eliminación de producto - {name}
                    </h3>
                    <button
                        className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
                        type="button"
                        onClick={() => {
                            setModal(false, null);
                            setName('')
                            setId(0)
                        }}>
                        <i className="ri-close-line text-2xl text-white"></i>
                    </button>
                </div>
                {
                    alert.msg !== '' && (
                        alert.type === 'error' ? (
                            <div className="bg-danger/10 text-danger border border-danger/20 text-sm rounded-md py-3 px-5 mb-2">
                                <div className="flex items-center gap-1.5">
                                    <i className={`ri-close-circle-line text-base`}></i>
                                    <p className="text-sm">
                                        Error: <span className="font-bold">{alert.msg}</span>
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-success/10 text-success border border-success/20 text-sm rounded-md py-3 px-5 mb-2">
                                <div className="flex items-center gap-1.5">
                                    <i className={`ri-check-line text-base`}></i>
                                    <p className="text-sm">
                                        Éxito: <span className="font-bold">{alert.msg}</span>
                                    </p>
                                </div>
                            </div>
                        )
                    )
                }
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
                        onClick={() => {
                            setModal(false, null);
                            setName('')
                            setId(0)
                        }}>
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

export default ModalDeleteProductMenu;
