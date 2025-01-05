import { PageBreadcrumb } from "@/components";
import { ModalLayout } from "@/components/HeadlessUI";
import { useCajaStore } from "@/store/Caja/Caja.store";
import { useGlobalStore } from "@/store/Global/Global.store";
import checkPermissions from "@/utils/checkPermissions";
import { Grid, _ } from "gridjs-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getBoxes } from "./api/getBoxes";
import { formatDateTime } from "@/helpers/format-date-hour";
import formatMxCurrency from "@/helpers/format-currency";


const PaginaCaja = () => {
    const navigate = useNavigate();
    
    const caja = useCajaStore((state) => state.caja);
    const setCaja = useCajaStore((state) => state.setCaja);
    const toast = useGlobalStore((state) => state.toast);
    const setToast = useGlobalStore((state) => state.setToast);
    
    useEffect(() => {
        const checkPermissionsAsync = async () => {
            const check = await checkPermissions(["6"]);
            if (!check) {
                setToast("error", "No tienes permisos para acceder a esta sección");
            }
        };
        checkPermissionsAsync();
    }, []);

    useEffect(() => {
        const getCaja = async () => {
            const response = await getBoxes();
            if (response) {
                setCaja(response.boxes);
            } else {
                setCaja([]);
            }
        }
        getCaja();
    }, [])

    const handleModal = () => {
        setToast("info", "");
        navigate("/dashboard");
    };
    return (
        <>
            {!toast.msg && (
                <PageBreadcrumb title="Caja Registradora" subName="Dashboard" />
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
                <>
                    <div className="my-7">
                        <h4 className="card-title">Listado de cortes de caja</h4>
                    </div>

                    <section>
                    {
                        caja && caja.length > 0 ? (
                            <Grid
                            data={caja.map((item) => [
                                item.id,
                                item.responsable,
                                _(<p>Corte - #{item.id}</p>),
                                formatDateTime(item.fecha),
                                formatMxCurrency(item.total),
                                _(
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            className="btn bg-primary text-white"
                                            onClick={() => navigate(`/dashboard/caja/${item.id}`)}>
                                            <i className="ri-eye-line"></i>
                                        </button>
                                    </div>
                                ),
                            ])}
                            columns={["ID", "Responsable", "Corte", "Fecha", "Total", "Acciones"]}
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
                            <div className="text-center text-gray-500">
                                <i className={`ri-shopping-cart-2-line text-4xl`}></i>
                                <h4 className="text-xl font-medium mt-3 mb-2.5">
                                    No hay cajas registradas {caja.length}
                                </h4>
                            </div>
                        )
                    }
                    </section>
                </>
            )}
        </>
    );
};

export default PaginaCaja;
