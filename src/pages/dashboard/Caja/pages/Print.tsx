import { useCajaStore } from "@/store/Caja/Caja.store";
import checkPermissions from "@/utils/checkPermissions";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getResumeBox } from "../api/getBoxId";
import formatMxCurrency from "@/helpers/format-currency";
import '../../Ventas/components/style.css';
import { formatDate } from "@/helpers/format-date";

const PrintBox = () => {

    const navigate = useNavigate();
    
    const cajaIndividual = useCajaStore((state) => state.cajaIndividual);
    const setCajaIndividual = useCajaStore((state) => state.setCajaIndividual);
    
    useEffect(() => {
        const checkPermissionsAsync = async () => {
            const check = await checkPermissions(["6"]);
            if (!check) {
                navigate("/dashboard/caja");
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
                        Fecha Corte: {formatDate(cajaIndividual?.fecha ?? '')}
                        <br />
                        Impreso: {new Date().toLocaleString()}
                        <br />
                        Responsable: {cajaIndividual?.responsable}
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
                            {cajaIndividual?.boxProducts.map((product) => (
                                <tr key={product.id} className="tr">
                                    <td className="cantidad">{product.quantity}</td>
                                    <td className="producto">{product.product?.name}</td>
                                    <td className="precio">{formatMxCurrency(product.product!.price)}</td>
                                </tr>
                            ))}
    
                            <tr className="tr">
                                <td className="cantidad"></td>
                                <td className="producto">Total</td>
                                <td className="precio">{formatMxCurrency(cajaIndividual?.total ?? 0)}</td>
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

export default PrintBox
