import { useOrdenStore } from "@/store/Orden/Orden.store";
import ModalDeleteOrder from "./ModalDelete";
import { useGlobalStore } from "@/store/Global/Global.store";

interface Props {
  id: number;
}

const Acciones = ({ id }: Props) => {
  const setIdOrden = useOrdenStore((state) => state.setIdOrden);
  const setModal = useGlobalStore((state) => state.setModal);

  return (
      <button
        className="btn bg-red-600 text-white hover:bg-red-400 font-black uppercase"
        onClick={() => {
          setIdOrden(id);
          setModal(true, <ModalDeleteOrder />);
        }}
      >
        Eliminar
      </button>
  );
};

export default Acciones;
