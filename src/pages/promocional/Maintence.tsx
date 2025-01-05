
import { Link } from 'react-router-dom'
import AuthContainer from '../../components/AuthPageLayout/AuthContainer'
import maintenance from '@/assets/images/svg/maintenance.svg'

const PaginaMantenimiento = () => {
  return (
    <>
			<AuthContainer>
				<div className="h-screen relative">
					<div className="absolute start-0 end-0 top-0 bottom-0 h-full"></div>
					<div className="flex justify-center items-center h-full relative">
						<div className="2xl:w-7/12 xl:w-4/5 w-11/12">
							<div className="card">
								<div className="p-10">
									<div className="">
										<img src={maintenance} alt="maintenance.svg" className="h-40 mx-auto" />
									</div>

									<div className="max-w-lg mx-auto text-center">
										<h2 className="card-title text-2xl dark:text-white mb-1 mt-9">Sitio en construcción</h2>
										<p className="font-normal text-gray-400 dark:text-gray-400">
                                            Estamos trabajando en el sitio y volveremos pronto.{' '}
                                        </p>
									</div>

									<div className="pt-24">
										<div className="grid md:grid-cols-3 gap-6">
											<div className="px-3 text-center">
												<div className="bg-primary text-white text-xl rounded-full flex items-center justify-center h-14 w-14 mx-auto mb-8">
													<i className="ri-vip-diamond-line"></i>
												</div>
												<h5 className="font-semibold uppercase mb-2">Porque el sitio esta en mantenimiento?</h5>
												<p className="text-gray-400">
                                                    Existen diversas razones por las cuales un sitio web puede estar en mantenimiento, entre ellas se encuentran la actualización de contenido, la corrección de errores, la actualización de la plataforma, entre otros.
                                                </p>
											</div>

											<div className="px-3 text-center">
												<div className="bg-primary text-white text-xl rounded-full flex items-center justify-center h-14 w-14 mx-auto mb-8">
													<i className="ri-time-line"></i>
												</div>
												<h5 className="font-semibold uppercase mb-2">Cuanto tiempo tardara?</h5>
												<p className="text-gray-400">
                                                    Estamos haciendo todo lo posible para que el sitio este disponible lo antes posible, agradecemos su paciencia.
                                                </p>
											</div>

											<div className="px-3 text-center">
												<div className="bg-primary text-white text-xl rounded-full flex items-center justify-center h-14 w-14 mx-auto mb-8">
													<i className="ri-question-mark"></i>
												</div>
												<h5 className="font-semibold uppercase mb-2">Necesitas ayuda?</h5>
												<p className="text-gray-400">
													Si tienes alguna pregunta, por favor no dudes en contactarnos.{' '}
													<Link to="" className="text-gray-500 font-medium">
                                                        service@lowsolutions.com
													</Link>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<footer className="inline-flex items-center justify-center absolute start-0 end-0 -bottom-10 font-medium bg-transparent md:bottom-0">
							<span className="">{new Date().getFullYear()} © LowSolutions - Engineers Software Team</span>
						</footer>
					</div>
				</div>
			</AuthContainer>
		</>
  )
}

export default PaginaMantenimiento
