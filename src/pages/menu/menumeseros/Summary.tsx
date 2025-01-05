import { useOrdenStore } from "@/store/Orden/Orden.store";
import CardMenu from "./components/CardMenu";
import formatMxCurrency from "@/helpers/format-currency";
import { CreateOrder } from "./api/CreateOrder";
import { useGlobalStore } from "@/store/Global/Global.store";
import { UpdateOrder } from "./api/UpdateOrder";
import { useNavigate } from "react-router-dom";

const SummaryMenu = () => {
    const navigate = useNavigate();
    const orden = useOrdenStore((state) => state.orden);
    const clearOrden = useOrdenStore((state) => state.clearOrden);
    const total = useOrdenStore((state) => state.getTotal());
    const setAlert = useGlobalStore((state) => state.setAlert);
    const idOrder = useOrdenStore((state) => state.idOrden);
    const setIdOrden = useOrdenStore((state) => state.setIdOrden);

    const handleCreateOrder = async () => {
        const data = {
            total: total,
            date: new Date(),
            products: orden.map((orden) => ({
                productId: orden.item.id,
                quantity: orden.quantity,
            })),
        };

        const response = await CreateOrder(data);

        const errorMessages: { [key: number]: string } = {
            400: "Error al crear la orden",
            401: "No autorizado",
            403: "No tienes permisos",
            404: "No encontrado",
            500: "Error en el servidor",
        };

        if (response.status in errorMessages) {
            setAlert("error", errorMessages[response.status]);

            setTimeout(() => {
                setAlert("info", "");
            }, 1500);
            return;
        }

        setAlert("success", response.msg);
        clearOrden();

        setTimeout(() => {
            setAlert("info", "");
        }, 1500);
    };

    const handleUpdateOrder = async () => {
        const data = {
            total: total,
            date: new Date(),
            products: orden.map((orden) => ({
                productId: orden.item.id,
                quantity: orden.quantity,
            })),
        };

        const response = await UpdateOrder(idOrder, data);

        const errorMessages: { [key: number]: string } = {
            400: "Error al crear la orden",
            401: "No autorizado",
            403: "No tienes permisos",
            404: "No encontrado",
            500: "Error en el servidor",
        };

        if (response.status in errorMessages) {
            setAlert("error", errorMessages[response.status]);

            setTimeout(() => {
                setAlert("info", "");
            }, 1500);
            return;
        }

        setAlert("success", response.msg);
        clearOrden();
        setIdOrden(0);

        setTimeout(() => {
            setAlert("info", "");
        }, 1500);
    };

    const handleCancelOrder = async () => {
        clearOrden();
        setIdOrden(0);
        navigate(-1);
    };

    return (
        <div className="bg-white p-5 mt-5 rounded-md border border-gray-200 w-full">
            <div className="flex justify-between items-center mt-5">
                <h2 className="card-title">Resumen de la orden del cliente</h2>
            </div>
            <div className="mt-5">
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {orden.map((orden, idx) => (
                        <CardMenu key={idx} orden={orden} />
                    ))}
                </ul>
                <div className="mt-3 text-right">
                    <span className="font-bold text-lg">
                        Total: {formatMxCurrency(total)}
                    </span>
                </div>
            </div>

            <div className="mt-5">
                {idOrder === 0 ? (
                    <button
                        className="btn bg-primary text-white w-full lg:w-auto lg:float-right"
                        onClick={() => handleCreateOrder()}>
                        <i className="ri-add-line me-1"></i> Agregar a la orden
                    </button>
                ) : (
                    <div className="flex gap-3 justify-end">
                        <button
                            className="btn bg-success text-white w-full lg:w-auto lg:float-right"
                            onClick={() => handleUpdateOrder()}>
                            <i className="ri-add-line me-1"></i> Actualizar orden
                        </button>
                        <button
                            className="btn bg-danger text-white w-full lg:w-auto lg:float-right"
                            onClick={() => handleCancelOrder()}>
                            <i className="ri-close-line me-1"></i> Cancelar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default SummaryMenu;
