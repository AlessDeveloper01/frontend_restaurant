import formatMxCurrency from "@/helpers/format-currency";
import React from "react";
import { Link } from "react-router-dom";
import { updateOrder } from "../api/updateOrder";
import { useGlobalStore } from "@/store/Global/Global.store";

interface CardOrdenProps {
    venta: {
        id: number;
        mesero: string;
        total: number;
        status: boolean;
        orderReadyAt: string;
        date: string;
        orderProducts: {
            id: number;
            orderId: number;
            productId: number;
            quantity: number;
            product: {
                id: number;
                name: string;
                price: number;
                category: number;
                status: boolean;
            }
        }[];
    }
}

const CardOrden = ({ venta }: CardOrdenProps) => {

    
    const setAlert = useGlobalStore((state) => state.setAlert);

    const handleOrdenLista = async () => {
        const data = {
            status: false,
            id: venta.id
        };
        const response = await updateOrder(data);

        const errorMessages = {
            400: "Error al actualizar la orden",
            401: "No tienes permisos para actualizar la orden",
            402: "Error al actualizar la orden",
            403: "Error al actualizar la orden",
            404: "No se encontró la orden",
            500: "Error en el servidor",
        } as Record<number, string>;

        for (const key in errorMessages) {
            if (response.status === Number(key)) {
                setAlert("error", errorMessages[key]);
            }
        }

        setAlert("success", "Orden actualizada correctamente");

        setTimeout(() => {
            setAlert("info", "");
        }, 1000);
    }

    return (
        <div className={`card border border-primary`}>
            <div className="p-6">
                <h3 className="text-base font-bold text-secondary dark:text-white mb-2">
                    Orden #{venta.id} - Mesero: {venta.mesero}
                </h3>
                <p className="mt-3 text-gray-800 dark:text-gray-400 mb-3 uppercase font-bold">
                    Productos Ordenados
                </p>
                {(() => {
                    const categories = venta.orderProducts.reduce((acc, product) => {
                        const category = product.product.category;
                        if (!acc[category]) {
                            acc[category] = [];
                        }
                        acc[category].push(product);
                        return acc;
                    }, {} as { [key: number]: typeof venta.orderProducts });

                    return Object.keys(categories).map((category) => {
                        const categoryNumber = Number(category);
                        return (
                            <div key={categoryNumber}>
                                <h4 className="text-lg font-semibold mt-4">
                                ==========================
                                </h4>
                                <ul className="list-disc list-inside text-gray-800 dark:text-gray-400 mb-3">
                                    {
                                        categories[categoryNumber].map((product) => (
                                            <li className="mb-1 text-lg" key={product.id}>
                                                {product.product.name} - <span className="text-primary font-black">{product.quantity}</span> x <span className="font-black text-primary">{formatMxCurrency(product.product.price)}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        );
                    });
                })()}
                <div className="mt-3 text-gray-800 dark:text-gray-400 mb-3 uppercase font-bold text-right text-xl">
                    Total: {formatMxCurrency(venta.total)}
                </div>
                <div className="flex gap-3.5 flex-col lg:flex-row">
                    <Link className={`btn bg-primary text-white mt-2 flex-1`} to={`/print/${venta.id}`}>
                        Imprimir
                    </Link>
                    <button className={`btn bg-success text-white mt-2 flex-1`}
                        onClick={
                            handleOrdenLista
                        }
                    >
                        Regresar orden a cocina
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardOrden;
