import { jsx as _jsx } from "react/jsx-runtime";
import { useOrdenStore } from "@/store/Orden/Orden.store";
import ModalDeleteOrder from "./ModalDelete";
import { useGlobalStore } from "@/store/Global/Global.store";
const Acciones = ({ id }) => {
    const setIdOrden = useOrdenStore((state) => state.setIdOrden);
    const setModal = useGlobalStore((state) => state.setModal);
    return (_jsx("button", { className: "btn bg-red-600 text-white hover:bg-red-400 font-black uppercase", onClick: () => {
            setIdOrden(id);
            setModal(true, _jsx(ModalDeleteOrder, {}));
        }, children: "Eliminar" }));
};
export default Acciones;
