import { useModalStore } from '@/store';
import { useGlobalStore } from '@/store/Global/Global.store'
import React from 'react'

interface AccionesButtonsProps {

    onClick: () => void;

}

const AccionesButtons = ({ onClick }: AccionesButtonsProps) => {
    const setModalDelete = useGlobalStore(state => state.setModalDelete);
    const setModalUpdate = useModalStore(state => state.handleModal);

  return (
    <div
        className='grid grid-cols-1 gap-4 md:grid-cols-2'
    >
        <button
            className='btn bg-primary text-white'
            onClick={() => {
                onClick();
                setModalUpdate(1);
            }}
        >
            <i className='ri-pencil-line me-1'></i> Editar
        </button>
        <button
            className='btn bg-danger text-white'
            onClick={() => {
                setModalDelete(true);
                onClick();
            }}
        >
            <i className='ri-delete-bin-line me-1'></i> Eliminar
        </button>
    </div>
  )
}

export default AccionesButtons
