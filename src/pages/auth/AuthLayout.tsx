/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

//images
import logo from '@/assets/images/logo.png'

// style
import 'swiper/swiper-bundle.css';

interface AccountLayoutProps {
	pageImage?: string
	title: string
	helpText?: string
	bottomLinks?: any
	isCombineForm?: boolean
	children?: any
	hasThirdPartyLogin?: boolean
	starterClass?: boolean
}

const AuthLayout = ({ pageImage, title, helpText, bottomLinks, children, starterClass }: AccountLayoutProps) => {
	return (
		<div className="flex items-stretch h-screen bg-cover bg-center relative bg-no-repeat  bg-[url('../images/bg-auth.jpg')]">
			<div className="lg:max-w-[480px] z-10 p-12 relative w-full h-full border-t-[3px] border-primary bg-white">
				<div className="flex flex-col h-full gap-4">
					<div className="mb-8 text-center lg:text-start">
						<Link to="/" className="flex justify-center">
							<img src={logo} alt="logo" className="h-20 block" />
						</Link>
					</div>
					<div className={`my-auto ${starterClass ? 'text-center' : ''}`}>
						{pageImage && <img src={pageImage} alt="" className="rounded-full shadow h-16 mx-auto" />}

						<h4 className={`text-lg font-semibold text-light/80 mb-2 ${pageImage ? 'mt-6' : ''}`}>{title}</h4>
						<p className="text-gray-400 mb-9">{helpText}</p>

						{children}
					</div>

					{bottomLinks}
				</div>
			</div>

			<div className="bg-black/30 w-full h-full relative hidden lg:block">
				<div className="absolute start-0 end-0 bottom-0 flex mt-auto justify-center text-center">
					<div className="xl:w-1/2 w-full mx-auto">
						<div className="swiper mt-auto cursor-col-resize" id="swiper_one">
							<div className="swiper-wrapper mb-12">
								<Swiper spaceBetween={50} slidesPerView={1} modules={[Autoplay]} loop={true} autoplay={{ delay: 5000 }}>
									<SwiperSlide>
										<div className="swiper-slide-content">
											<h2 className="text-3xl text-white mb-6">Da el paso a la tecnologia!</h2>
											<p className="text-lg text-white mb-5">
												<i className="ri-double-quotes-l"></i> La tecnología nos facilita reducir las barreras de la distancia y el tiempo.
											</p>
											<p className="text-white mx-auto">- CEO LowSolutions</p>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="swiper-slide-content">
											<h2 className="text-3xl text-white mb-6">Flexibilidad !</h2>
											<p className="text-lg text-white mb-5">
												<i className="ri-double-quotes-l"></i> Gracias a este sistema pude mejorar el rendimiento de mi negocio.
											</p>
											<p className="text-white mx-auto">- Usuario</p>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="swiper-slide-content">
											<h2 className="text-3xl text-white mb-6">Actualizaciones Frecuentes!</h2>
											<p className="text-lg text-white mb-5">
												<i className="ri-double-quotes-l"></i> El sistema se encuentra con actualizaciones frecuentes y soporte al cliente 24/7.
											</p>
											<p className="text-white mx-auto">- Equipo De Desarrollo</p>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AuthLayout
