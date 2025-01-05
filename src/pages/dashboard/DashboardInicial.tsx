import { PageBreadcrumb } from '@/components'
import MarcaAgua from '@/components/MarcaAgua'

const DashboardInicial = () => {
  return (
    <>
      <PageBreadcrumb title="Dashboard" subName='Dashboard' />
      <div className='mt-10'>
        <h1 className='text-4xl font-bold text-gray-800 text-center md:text-left'>Bienvenido a tu panel de administracion!</h1>

        <div className='flex flex-col justify-center items-center h-96 relative text-center md:text-left'>
          <h1 className='text-4xl font-bold text-gray-800'>¡Bienvenido!</h1>
          <p className='text-gray-600'>Seleccion
            a la izquierda el modulo que deseas administrar.</p>
        <MarcaAgua />
        </div>

      </div>
    </>
  )
}

export default DashboardInicial
