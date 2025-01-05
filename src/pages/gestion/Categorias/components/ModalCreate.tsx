import { FormInput } from "@/components";
import { ModalLayout } from "@/components/HeadlessUI";
import { useCategorias } from "@/store/Categorias/Categorias.store";
import { useGlobalStore } from "@/store/Global/Global.store";
import React from "react";
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

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await createCategory(name, status);

        const errorMessages: { [key: number]: string } = {
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
    }

    return (
        <>
            <ModalLayout
                showModal={modal.open}
                toggleModal={() => setModal(false, null)}
                panelClassName="sm:max-w-lg"
                placement=" justify-center items-start">
                <div className="duration-300 ease-in-out transition-all m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800">
                    <div className="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
                        <h3 className="font-medium text-gray-600 dark:text-white text-lg">
                            Agregar categoría al menú
                        </h3>
                        <button
                            className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
                            type="button">
                            <i
                                className="ri-close-line text-2xl"
                                onClick={() => 
                                    setModal(false, null)
                                }></i>
                        </button>
                    </div>
                    <div className={`p-4 overflow-y-auto`}>
                        <h5 className="mb-2.5 text-base">
                            Rellena todos los campos
                        </h5>
                        {alert.msg != "" &&
                            (alert.type === "error" ? (
                                <div
                                    id={`dismiss-example-1`}
                                    className={`border-0 text-white bg-danger rounded-md py-3 px-5 flex justify-between items-center`}>
                                    <p>
                                        <span className="font-bold">Error:</span>{" "}
                                        {alert.msg}
                                    </p>
                                    <button className="text-xl/[0]" type="button">
                                        <i className="ri-close-line text-xl"></i>
                                    </button>
                                </div>
                            ) : (
                                <div
                                    id={`dismiss-example-2`}
                                    className={`border-0 text-white bg-success rounded-md py-3 px-5 flex justify-between items-center`}>
                                    <p>
                                        <span className="font-bold">Éxito:</span>{" "}
                                        {alert.msg}
                                    </p>
                                    <button className="text-xl/[0]" type="button">
                                        <i className="ri-close-line text-xl"></i>
                                    </button>
                                </div>
                            ))}
                        <hr className="my-5 dark:border-gray-700" />
                        <form onSubmit={onSubmit}>
                            <FormInput
                                label="Nombre de la categoría"
                                labelClassName="font-semibold text-gray-500"
                                type="text"
                                className="form-input w-full md:w-96"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={"Postres"}
                                containerClass="mb-6 space-y-2"
                            />
                            <div className="flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700">
                                <button
                                    className="btn bg-light text-gray-800 transition-all"
                                    onClick={() => 
                                        setModal(false, null)
                                    }>
                                    Cerrar
                                </button>
                                <button className="btn bg-primary text-white" type="submit">
                                    Crear categoría
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </ModalLayout>
        </>
    );
};

export default ModalCreateCategory;
