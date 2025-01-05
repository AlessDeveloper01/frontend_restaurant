import React from 'react'

interface onProps {
    onClickVer?: () => void;
    onClickImprimir?: () => void;
}

const Visualizar = ({onClickVer, onClickImprimir}: onProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-2">
        <button className="btn bg-primary text-white hover:bg-primary/40 font-black uppercase"
            onClick={onClickVer}
        >
            Ver
        </button>
        <button className="btn bg-warning text-white hover:bg-warning/40 font-black uppercase"
            onClick={onClickImprimir}
        >
            Imprimir
        </button>
    </div>
  )
}

export default Visualizar
