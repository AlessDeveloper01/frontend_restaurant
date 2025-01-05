import { Link, useNavigate } from "react-router-dom";
import { PageBreadcrumb } from "../../../components";
import { Grid, _ } from "gridjs-react";
import checkPermissions from "@/utils/checkPermissions";
import { useGlobalStore } from "@/store/Global/Global.store";
import { useEffect } from "react";
import { ModalLayout } from "@/components/HeadlessUI";
import { useVentasStore } from "@/store/Ventas/Ventas.store";
import { getOrdersIncomplete } from "./api/getOrdersIncomplete";
import Acciones from "./components/Acciones";
import { formatDateTime } from "@/helpers/format-date-hour";
import Visualizar from "./components/Visualizar";

const PaginaOrdenes = () => {
    const navigate = useNavigate();

    const toast = useGlobalStore((state) => state.toast);
    const setToast = useGlobalStore((state) => state.setToast);
    const orden = useVentasStore((state) => state.ventas);
    const alert = useGlobalStore((state) => state.alert);
    const setOrden = useVentasStore((state) => state.setVentas);
    const setId = useVentasStore((state) => state.setId);
    const modal = useGlobalStore((state) => state.modal);

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
        const getOrdenIncomplete = async () => {
            const response = await getOrdersIncomplete();
            const errors = [400, 401, 403, 404, 500];
            if (errors.includes(response.status)) {
                setOrden([]);
            } else {
                setOrden(response);
            }
        };
        getOrdenIncomplete();
    }, []);

    const handleModal = () => {
        setToast("info", "");
        navigate("/dashboard");
    };

    return (
        <>
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
                    <PageBreadcrumb title="Ordenes" subName="Dashboard" />
                    <h2 className="text-xl my-7">Gestión de ordenes</h2>

                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div className="flex gap-4 flex-col md:flex-row">
                            <Link className="btn bg-orange-600 text-white hover:bg-orange-400 font-black uppercase" to="/menu/postres">
                                Crear Orden
                            </Link>
                            <Link
                                to="/dashboard/ventas"
                                className="btn bg-blue-600 text-white hover:bg-blue-400 font-black uppercase">
                                Ordenes Finalizadas
                            </Link>
                        </div>
                    </div>

                    <section className="mt-5">
                        {
                            orden.length > 0 ? (
                                <Grid
                            data={
                                orden.map((item) => [
                                    item.id,
                                    _(<span>{item.mesero} - #{item.id}</span>),
                                    formatDateTime(item.date),
                                    _(<Visualizar 
                                        onClickImprimir={() => {
                                            setId(item.id);
                                            navigate(`/print/${item.id}`);
                                        }}
                                        onClickVer={() => {
                                            navigate(`/ver/${item.id}`);
                                        }}
                                    />),
                                    _(<Acciones 
                                        id={item.id}
                                    />)
                                ])
                            }
                            columns={["ID", "Mesero", "Fecha y Hora", "Acciones", "Opciones"]}
                            search={true}
                            pagination={{
                                limit: 10,
                                summary: true,
                                nextButton: true,
                                prevButton: true,
                            }}
                            sort={true}
                            language={{
                                search: {
                                    placeholder: "Ingresa tu búsqueda",
                                },
                                pagination: {
                                    previous: "Anterior",
                                    next: "Siguiente",
                                    showing: "Mostrando",
                                    results: () => "Resultados",
                                    of: "de",
                                    to: "a",
                                    perPage: "por página",
                                },
                            }}
                        />
                            ) : (
                                <div className="flex items-center justify-center h-96">
                                    <div className="text-center">
                                        <i className={`ri-folder-3-line text-4xl text-gray-400`}></i>
                                        <h4 className="text-xl font-medium mt-3 mb-2.5">
                                            No hay ordenes
                                        </h4>
                                        <p className="mt-6 mb-4">No hay ordenes pendientes</p>
                                    </div>
                                </div>
                            )
                        }
                    </section>

                    {
                        alert.msg !== '' && (
                            <div className={`fixed top-20 md:top-32 right-4 md:right-10 z-50 ${alert.type === 'error' ? 'bg-danger text-white border border-red-600' : 'bg-success text-white border border-green-600'} text-sm rounded-md py-3 px-5 mb-2`}>
                                <div className="flex items-center gap-1.5">
                                    <i className={`ri-${alert.type === 'error' ? 'close-circle-line' : 'check-line'} text-base`}></i>
                                    <p className="text-sm">
                                        {alert.type === 'error' ? 'Error' : 'Éxito'}: <span className="font-bold">{alert.msg}</span>
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>
            )}

            {
                modal.open && modal.component
            }
        </>
    );
};

export default PaginaOrdenes;
