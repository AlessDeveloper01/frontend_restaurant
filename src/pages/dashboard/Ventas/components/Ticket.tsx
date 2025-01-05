import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getOrderById } from "../api/getOrderById";
import './style.css'
import { VentaItem } from "@/store/Ventas/Ventas.store";
import { formatDate } from "@/helpers/format-date";
import formatMxCurrency from "@/helpers/format-currency";

const Ticket = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<VentaItem>();

  useEffect(() => {
    const getOrder = async () => {
      const idNumber = Number(id);
      const response = await getOrderById(idNumber);
      setOrder(response);
    } 
    getOrder();
  }, [id]);

  return (
    <>
            <div className="ticket">
                <img
                    src="/image.png"
                    alt="Logo"
                    className="logo"
                />

                <p className="centrado">
                    <br />
                    Restaurant La Perla
                    <br />
                    Fecha Ticket: {formatDate(order?.date ?? '')}
                    <br />
                    Impreso: {new Date().toLocaleString()}
                    <br />
                    Mesero: {order?.mesero}
                </p>
                <table className="table">
                    <thead className="thead">
                        <tr className="tr">
                            <th className="cantidad">Cantidad</th>
                            <th className="producto">Producto</th>
                            <th className="precio">$$</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order?.orderProducts.map((product) => (
                            <tr key={product.id} className="tr">
                                <td className="cantidad">{product.quantity}</td>
                                <td className="producto">{product.product.name}</td>
                                <td className="precio">{formatMxCurrency(product.product.price)}</td>
                            </tr>
                        ))}

                        <tr className="tr">
                            <td className="cantidad"></td>
                            <td className="producto">Total</td>
                            <td className="precio">{formatMxCurrency(order?.total ?? 0)}</td>
                        </tr>
                    </tbody>
                </table>
                <p className="centrado">
                    Gracias por su preferencia
                </p>
            </div>

            <button
                className="mt-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded oculto-impresion"
                onClick={() => window.print()}>
                Imprimir
            </button>

        </>
  )
}

export default Ticket
