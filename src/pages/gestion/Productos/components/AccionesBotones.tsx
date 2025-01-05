import React from 'react'

interface Props {
    onClickEdit?: () => void;
    onClickDelete?: () => void;
}

const AccionesBotones = ({ onClickDelete, onClickEdit }: Props) => {
  return (
    <div
        className='grid grid-cols-1 gap-4 md:grid-cols-2'
    >
        <button
            className='btn bg-primary text-white'
            onClick={onClickEdit}
        >
            <i className='ri-pencil-line me-1'></i> Editar
        </button>
        <button
            className='btn bg-danger text-white'
            onClick={onClickDelete}
        >
            <i className='ri-delete-bin-line me-1'></i> Eliminar
        </button>
    </div>
  )
}

export default AccionesBotones
