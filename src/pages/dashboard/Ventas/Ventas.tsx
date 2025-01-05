import { io } from "socket.io-client";
const socket = io(import.meta.env.VITE_API_URL);

import { PageBreadcrumb } from "@/components";
import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "../../../store/Global/Global.store";
import { ModalLayout } from "@/components/HeadlessUI";
import { useEffect } from "react";
import checkPermissions from "@/utils/checkPermissions";
import { getOrdersComplete } from "./api/getOrdersComplete";
import { useVentasStore } from "@/store/Ventas/Ventas.store";
import CardOrden from "./components/CardOrden";
import CerrarCaja from "../Caja/CerrarCaja";

const PaginaVentas = () => {
    const navigate = useNavigate();

    const alert = useGlobalStore((state) => state.alert);
    const toast = useGlobalStore((state) => state.toast);
    const setToast = useGlobalStore((state) => state.setToast);
    const ventas = useVentasStore((state) => state.ventas);
    const setVentas = useVentasStore((state) => state.setVentas);
    const modal = useGlobalStore((state) => state.modal);
    const setModal = useGlobalStore((state) => state.setModal);

    useEffect(() => {
        const checkPermissionsAsync = async () => {
            const check = await checkPermissions(["1", "6"]);
            if (!check) {
                setToast("error", "No tienes permisos para acceder a esta sección");
            }
        };
        checkPermissionsAsync();
    }, []);

    useEffect(() => {
        const getOrders = async () => {
            const response = await getOrdersComplete();
            const errors = [400, 401, 402, 403, 404, 500];
            if (errors.includes(response.status)) {
                setVentas([]);
            } else {
                setVentas(response);
            }
        };
        getOrders();
    }, []);

    useEffect(() => {
        socket.on("updateOrders", () => {
            const getOrders = async () => {
                const response = await getOrdersComplete();
                const errors = [400, 401, 402, 403, 404, 500];
                if (errors.includes(response.status)) {
                    setVentas([]);
                } else {
                    setVentas(response);
                }
            };
            getOrders();
        });

        return () => {
            socket.off("updateOrders");
        };
    }, []);

    const handleModal = () => {
        setToast("info", "");
        navigate("/dashboard");
    };

    const handleCloseBox = async () => {
        setModal(true, <CerrarCaja />);
    }

    return (
        <div>
            {!toast.msg && (
                <PageBreadcrumb title="Ordenes Vendidas" subName="Dashboard" />
            )}

            {toast.msg ? (
                <ModalLayout
                    showModal={true}
                    toggleModal={handleModal}
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
                                    onClick={handleModal}>
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </ModalLayout>
            ) : (
                <div className="relative">
                    <div className="my-7">
                        <div className="flex items-center justify-between">
                            <h4 className="card-title">
                                Listado de ordenes completadas
                            </h4>
                            <div className="flex items-center gap-2 flex-col">
                            {ventas && ventas.length > 0 && (
                                    <p className="text-gray-800 dark:text-gray-400 font-semibold text-sm text-center">
                                        Total de ordenes completas:{" "}
                                        <span className="font-bold">
                                            {ventas.length}
                                        </span>
                                    </p>
                            )}
                                    <button className="btn bg-primary text-white flex items-center gap-1 w-full"
                                        onClick={handleCloseBox}
                                    >
                                        <i className="ri-refresh-line"></i> Cerrar
                                        caja
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ventas &&
                            ventas.length > 0 &&
                            ventas.map((venta) => (
                                <CardOrden key={venta.id} venta={venta} />
                            ))}
                    </div>

                    {ventas && ventas.length === 0 && (
                        <div className="text-center w-full">
                            <p className="text-gray-800 dark:text-gray-400 font-black text-2xl">
                                No hay ordenes completadas
                            </p>
                        </div>
                    )}

                    {alert.msg !== "" && (
                        <div
                            className={`fixed top-20 md:top-32 right-4 md:right-10 z-50 ${
                                alert.type === "error"
                                    ? "bg-danger text-white border border-red-600"
                                    : "bg-success text-white border border-green-600"
                            } text-sm rounded-md py-3 px-5 mb-2`}>
                            <div className="flex items-center gap-1.5">
                                <i
                                    className={`ri-${
                                        alert.type === "error"
                                            ? "close-circle-line"
                                            : "check-line"
                                    } text-base`}></i>
                                <p className="text-sm">
                                    {alert.type === "error" ? "Error" : "Exito"}:{" "}
                                    <span className="font-bold">{alert.msg}</span>
                                </p>
                            </div>
                        </div>
                    )}
                {
                    modal.open && modal.component
                }
                </div>
            )}
        </div>
    );
};

export default PaginaVentas;
