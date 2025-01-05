import React from 'react'
import marcaAguaImage from '@/assets/images/pagina_fondo.png'

const MarcaAgua = () => {
  return (
    <div className='absolute mt-32'>
        <img src={marcaAguaImage} alt='marca de agua' className='w-full h-full opacity-10' />
    </div>
  )
}

export default MarcaAgua
