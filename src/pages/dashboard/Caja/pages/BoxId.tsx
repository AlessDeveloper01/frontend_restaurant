import { ModalLayout } from "@/components/HeadlessUI";
import { useCajaStore } from "@/store/Caja/Caja.store";
import { useGlobalStore } from "@/store/Global/Global.store";
import checkPermissions from "@/utils/checkPermissions";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { getResumeBox } from "../api/getBoxId";
import formatMxCurrency from "@/helpers/format-currency";
import { formatDateTime } from "@/helpers/format-date-hour";

const BoxId = () => {
    const navigate = useNavigate();
    
    const cajaIndividual = useCajaStore((state) => state.cajaIndividual);
    const setCajaIndividual = useCajaStore((state) => state.setCajaIndividual);
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

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchCaja = async () => {
            const response = await getResumeBox(id!);
            if (response.error) {
                navigate("/dashboard/caja");
            } else {
                setCajaIndividual(response.box);
            }
        };
        fetchCaja();
    }, [id]);

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
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto bg-white rounded-md p-4 shadow-md">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold text-gray-700">Corte de caja - #{cajaIndividual.id}</h1>
                <button className="btn bg-primary text-white" onClick={() => navigate("/dashboard/caja")}>
                    <i className="ri-arrow-left-s-line me-1"></i> Volver
                </button>
            </div>
            <div className="mt-4">
                <div className="flex items-center gap-2">
                    <p className="text-gray-600">ID:</p>
                    <p className="text-gray-800 font-semibold">{cajaIndividual.id}</p>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-gray-600">Nombre:</p>
                    <p className="text-gray-800 font-semibold">{cajaIndividual.responsable}</p>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-gray-600">Monto:</p>
                    <p className="text-gray-800 font-semibold">{formatMxCurrency(cajaIndividual.total)}</p>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-gray-600">Fecha de creación:</p>
                    <p className="text-gray-800 font-semibold">{formatDateTime(cajaIndividual.fecha)}</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <p className="text-gray-600">Productos:</p>
                    <nav 
                        className="overflow-y-auto w-full h-40 border border-gray-300 rounded-md p-2"
                    >
                        {cajaIndividual.boxProducts.map((product) => (
                            <div key={product.id} className="flex items-center gap-2">
                                <p className="text-gray-600 font-semibold">Producto: <span className="text-black font-black">{product.product!.name}</span></p>
                                <p className="text-primary font-black">x</p>
                                <p className="text-black font-black">{product.quantity} Piezas</p>
                                <p className="text-gray-600 font-semibold">Total: <span className="text-primary font-black">{formatMxCurrency(product.product!.price * product.quantity)}</span></p>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>

            <Link to={`/dashboard/caja/print/${cajaIndividual.id}`} className="btn bg-primary text-white mt-4 w-full">
                Imprimir
            </Link>
        </div>
        )}
    </>
  )
}

export default BoxId
