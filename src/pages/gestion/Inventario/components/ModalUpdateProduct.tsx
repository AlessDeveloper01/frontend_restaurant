import { FormInput } from '@/components'
import { ModalLayout } from '@/components/HeadlessUI'
import { useModalStore } from '@/store';
import { useGlobalStore } from '@/store/Global/Global.store';
import { useInventarioStore } from '@/store/Inventario/Inventario.store';
import React from 'react'
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

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    }

  return (
    <>
            <ModalLayout
                showModal={isModalOpen === 1}
                toggleModal={() => closeModal()}
                panelClassName="sm:max-w-lg"
                placement=" justify-center items-start">
                <div className="duration-300 ease-in-out transition-all m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800">
                    <div className="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
                        <h3 className="font-medium text-gray-600 dark:text-white text-lg">
                            Actualizando el producto - <span className="font-black">{name}</span>
                        </h3>
                        <button
                            className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
                            type="button">
                            <i
                                className="ri-close-line text-2xl"
                                onClick={() => closeModal()}></i>
                        </button>
                    </div>
                    <div className={`p-4 overflow-y-auto`}>
                        <h5 className="mb-2.5 text-base">
                            Actualiza los datos del producto
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
                                label="Nombre del producto"
                                labelClassName="font-semibold text-gray-500"
                                type="text"
                                className="form-input w-full md:w-96"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={"Coca cola"}
                                containerClass="mb-6 space-y-2"
                            />
                            <FormInput
                                label="Cantidad"
                                labelClassName="font-semibold text-gray-500"
                                type="number"
                                className="form-input w-full md:w-96"
                                name="stock"
                                value={stock}
                                onChange={(e) => setStock(Number(e.target.value))}
                                placeholder={"30"}
                                containerClass="mb-6 space-y-2"
                                min="0"
                            />
                            <div className="flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700">
                                <button
                                    className="btn bg-light text-gray-800 transition-all"
                                    onClick={() => 
                                        closeModal()
                                    }>
                                    Cerrar
                                </button>
                                <button className="btn bg-primary text-white" type="submit">
                                    Actualizar producto
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </ModalLayout>
        </>
  )
}

export default ModalUpdateProduct
