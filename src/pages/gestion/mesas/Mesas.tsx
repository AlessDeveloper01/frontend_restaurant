import { Link, useNavigate } from "react-router-dom";
import { FormInput, PageBreadcrumb } from "../../../components";
import { IconShopping } from "./assets/IconShopping";
import { useModalStore } from "../../../store";
import { ModalLayout } from "../../../components/HeadlessUI";
import checkPermissions from "@/utils/checkPermissions";
import { useGlobalStore } from "@/store/Global/Global.store";
import { useEffect } from "react";

const PaginaMesas = () => {

    const isModalOpen = useModalStore((state) => state.isModalOpen);
    const handleModal = useModalStore((state) => state.handleModal);

    const navigate = useNavigate();

    const toast = useGlobalStore((state) => state.toast);
    const setToast = useGlobalStore((state) => state.setToast);

    useEffect(() => {
        const checkPermissionsAsync = async () => {
            const check = await checkPermissions(["5", "6"]);
            if (!check) {
                setToast("error", "No tienes permisos para acceder a esta sección");
            }
        };
        checkPermissionsAsync();
    }, []);

    const handleModalError = () => {
        setToast("info", "");
        navigate("/dashboard");
    };

    return (
        <>
            {toast.msg ? (
                <ModalLayout
                    showModal={true}
                    toggleModal={handleModalError}
                    panelClassName="sm:max-w-xs"
                    placement="justify-center items-start">
                    <div
                        className={`duration-300 ease-in-out transition-all sm:w-full m-3 sm:mx-auto flex flex-col bg-danger shadow-sm rounded`}>
                        <div className="p-9 overflow-y-auto">
                            <div className="text-center text-white">
                                <i className={`ri-close-circle-line text-4xl`}></i>
                                <h4 className="text-xl font-medium mt-3 mb-2.5">
                                    ¡Hay un problema!
                                </h4>
                                <p className="mt-6 mb-4">{toast.msg}</p>
                                <button
                                    type="button"
                                    className="btn bg-light text-gray-800 my-2"
                                    onClick={handleModalError}>
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalLayout>
            ) : (
        <>
            <PageBreadcrumb title="Mesas" subName="Dashboard" />
            <h2 className="text-xl my-7">Gestión de mesas</h2>

            <button
                type="button"
                className={`btn border-success text-success hover:bg-success hover:text-white mb-5 w-full lg:w-auto`}
                onClick={() => handleModal(1)}>
                Crear Mesa
            </button>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 md:gap-4 gap-2"> 
                <Link to="/mesas/1" className="hover:shadow-md hover:transition-all duration-300 relative">
                    <div className="bg-white p-5 rounded-md shadow-md flex flex-col justify-between items-center">
                        <h3 className="text-lg font-semibold">Mesa #1</h3>
                        <p className="text-sm text-gray-500">Estado: Disponible</p>
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mt-2">
                           <IconShopping />
                        </div>

                        <p className="absolute top-0 left-0 bg-orange-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
                            Presiona para entrar
                        </p>
                    </div>
                </Link>
                <Link to="/mesas/1" className="hover:shadow-md hover:transition-all duration-300 relative">
                    <div className="bg-white p-5 rounded-md shadow-md flex flex-col justify-between items-center">
                        <h3 className="text-lg font-semibold">Mesa #2</h3>
                        <p className="text-sm text-gray-500">Estado: Disponible</p>
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mt-2">
                           <IconShopping />
                        </div>

                        <p className="absolute top-0 left-0 bg-orange-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
                            Presiona para entrar
                        </p>
                    </div>
                </Link>
                <Link to="/mesas/1" className="hover:shadow-md hover:transition-all duration-300 relative">
                    <div className="bg-white p-5 rounded-md shadow-md flex flex-col justify-between items-center">
                        <h3 className="text-lg font-semibold">Mesa #3</h3>
                        <p className="text-sm text-gray-500">Estado: Disponible</p>
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mt-2">
                           <IconShopping />
                        </div>

                        <p className="absolute top-0 left-0 bg-orange-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
                            Presiona para entrar
                        </p>
                    </div>
                </Link>
                <Link to="/mesas/1" className="hover:shadow-md hover:transition-all duration-300 relative">
                    <div className="bg-white p-5 rounded-md shadow-md flex flex-col justify-between items-center">
                        <h3 className="text-lg font-semibold">Mesa #4</h3>
                        <p className="text-sm text-gray-500">Estado: Disponible</p>
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mt-2">
                           <IconShopping />
                        </div>

                        <p className="absolute top-0 left-0 bg-orange-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
                            Presiona para entrar
                        </p>
                    </div>
                </Link>
                <Link to="/mesas/1" className="hover:shadow-md hover:transition-all duration-300 relative">
                    <div className="bg-white p-5 rounded-md shadow-md flex flex-col justify-between items-center">
                        <h3 className="text-lg font-semibold">Mesa #5</h3>
                        <p className="text-sm text-gray-500">Estado: Disponible</p>
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mt-2">
                           <IconShopping />
                        </div>

                        <p className="absolute top-0 left-0 bg-orange-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
                            Presiona para entrar
                        </p>
                    </div>
                </Link>
                <Link to="/mesas/1" className="hover:shadow-md hover:transition-all duration-300 relative">
                    <div className="bg-white p-5 rounded-md shadow-md flex flex-col justify-between items-center">
                        <h3 className="text-lg font-semibold">Mesa #6</h3>
                        <p className="text-sm text-gray-500">Estado: Disponible</p>
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mt-2">
                           <IconShopping />
                        </div>

                        <p className="absolute top-0 left-0 bg-orange-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
                            Presiona para entrar
                        </p>
                    </div>
                </Link>
                <Link to="/mesas/1" className="hover:shadow-md hover:transition-all duration-300 relative">
                    <div className="bg-white p-5 rounded-md shadow-md flex flex-col justify-between items-center">
                        <h3 className="text-lg font-semibold">Mesa #7</h3>
                        <p className="text-sm text-gray-500">Estado: Disponible</p>
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mt-2">
                           <IconShopping />
                        </div>

                        <p className="absolute top-0 left-0 bg-orange-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
                            Presiona para entrar
                        </p>
                    </div>
                </Link>
            </div>
            </>
        )}

            { isModalOpen == 1 && ( <ModalMesa /> ) }
        </>
    );
};

function ModalMesa() {
    const isModalOpen = useModalStore((state) => state.isModalOpen);
    const handleModal = useModalStore((state) => state.handleModal);

    return (
        <ModalLayout
            showModal={isModalOpen === 1}
            toggleModal={() => handleModal(0)}
            panelClassName="sm:max-w-lg"
            placement=" justify-center items-start">
            <div className="duration-300 ease-in-out transition-all m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800">
                <div className="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
                    <h3 className="font-medium text-gray-600 dark:text-white text-lg">
                        Crear una nueva mesa
                    </h3>
                    <button
                        className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200"
                        type="button">
                        <i
                            className="ri-close-line text-2xl"
                            onClick={() => handleModal(1)}></i>
                    </button>
                </div>  
                <div className={`p-4 overflow-y-auto`}>
                    <h5 className="mb-2.5 text-base">Rellena todos los campos</h5>
                    <p className="text-sm mb-4">
                    <div id={`dismiss-example-1`} className={`border-0 text-white bg-danger rounded-md py-3 px-5 flex justify-between items-center`}>
								<p>
									<span className="font-bold">Error:</span> Todos los campos son obligatorios
								</p>
								<button className="text-xl/[0]" type="button">
									<i className="ri-close-line text-xl"></i>
								</button>
							</div>
                    </p>
                    <hr className="my-5 dark:border-gray-700" />
                    <FormInput 
                        label="Nombre de la mesa" labelClassName="font-semibold text-gray-500" type="text" className="form-input w-full md:w-96" name="name" placeholder={'Mesa terraza'} containerClass="mb-6 space-y-2"
                    />
                </div>
                <div className="flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700">
                    <button
                        className="btn bg-light text-gray-800 transition-all"
                        onClick={() => handleModal(0)}>
                        Cerrar
                    </button>
                    <Link className="btn bg-primary text-white" to="">
                        Guardar
                    </Link>
                </div>
            </div>
        </ModalLayout>
    );
}

export default PaginaMesas;
