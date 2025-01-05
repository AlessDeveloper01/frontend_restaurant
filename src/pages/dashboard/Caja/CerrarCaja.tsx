import { ModalLayout } from '@/components/HeadlessUI'
import { useGlobalStore } from '@/store/Global/Global.store';
import React from 'react'
import { CloseBox } from '../Ventas/api/closeBox';
import { useVentasStore } from '@/store/Ventas/Ventas.store';

const CerrarCaja = () => {
    const modal = useGlobalStore((state) => state.modal);
    const ventas = useVentasStore((state) => state.ventas);
    const setVentas = useVentasStore((state) => state.setVentas);
    const setModal = useGlobalStore((state) => state.setModal);
    const setAlert = useGlobalStore((state) => state.setAlert);

    const onClose = () => {
        setModal(false, null);
    }

    const handleCerrarCaja = async () => {
        if(ventas.length < 1 ) {
            setAlert('error', 'No hay ventas para cerrar');
            setModal(false, null);
    
            setTimeout(() => {
                setAlert('info', '');
            }, 1500);
            return;
        }
        
        const response = await CloseBox();
        const errorMessages: { [key: number]: string } = {
            400: "Error al cerrar la caja",
            403: "No tienes permisos para realizar esta acción",
            404: "El producto no existe",
            500: "Error interno",
        };
        
        if (response.status in errorMessages) {
            setAlert('error', errorMessages[response.status]);
    
            setTimeout(() => {
                setAlert('info', '');
            }, 1500);
            return;
        }
    
        setAlert("success", response.msg);
        setVentas([]);

        setModal(false, null);
        setTimeout(() => {
            setAlert("info", "");
        }, 1500);
    }
  return (
    <ModalLayout
        showModal={modal.open}
        toggleModal={onClose}
        panelClassName="sm:max-w-lg" placement="justify-center items-start">
        <div className="duration-300 ease-in-out transition-all  m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800 dark:border-gray-700">
            <div className={`flex justify-between items-center py-2.5 px-4 bg-warning/90 dark:border-gray-700`}>
                <h3 className="font-medium text-white text-lg">Cerrar caja de ventas</h3>
                <button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200" type="button">
                    <i className="ri-close-line text-2xl text-white" onClick={onClose}></i>
                </button>
            </div>
            <div className={`p-4 bg-warning text-white overflow-y-auto`}>
                <h5 className="mb-2.5 text-base">¿Estas seguro/a de cerrar la caja?</h5>
                <p className="text-sm mb-4">
                    Al cerrar la caja se generará un reporte con las ventas del día y se eliminaran las ventas.
                </p>
                <p className="text-sm mb-4">
                    Una vez cerrada la caja no se podrá deshacer esta acción.
                </p>
            </div>
            <div className={`flex justify-end items-center gap-2 p-4 border-t bg-warning border-white/5`}>
                <button className="btn bg-light text-gray-800 transition-all" onClick={onClose}>
                    Cancelar
                </button>
                <button className="btn border-light hover:bg-light hover:text-gray-800 text-white"
                    onClick={handleCerrarCaja}
                >
                    Cerrar caja
                </button>
            </div>
        </div>
    </ModalLayout>
  )
}

export default CerrarCaja
