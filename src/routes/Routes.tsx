import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { privateRoutes, publicRoutes, ticketRoute } from ".";
import DefaultLayout from "../layouts/Default";
import VerticalLayout from "../layouts/Vertical";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PaginaMantenimiento from "../pages/promocional/Maintence";

const AllRoutes = () => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const token = localStorage.getItem("restaurante_token");
		const splitToken = token?.split(" ")[1];
	  
		if (!token) {
		  if (!["/auth/login", "/landing"].includes(location.pathname)) {
			navigate("/auth/login");
		  }
		  return;
		}
	  
		axios
		  .post(`${import.meta.env.VITE_API_URL}/auth/validate`, {}, {
			headers: {
			  Authorization: splitToken,
			},
		  })
		  .then(() => {
			if (location.pathname === "/auth/login" || location.pathname === "/") {
			  navigate("/dashboard");
			}
		  })
		  .catch(() => {
			localStorage.removeItem("restaurante_token");
			if (!["/auth/login", "/landing"].includes(location.pathname)) {
			  navigate("/auth/login");
			}
		  });
	  }, [navigate, location.pathname]);
	  
	// useEffect(() => {
	// 	const token = localStorage.getItem("restaurante_token");
	// 	const splitToken = token?.split(" ")[1];
	// 	axios.post(
	// 			`${import.meta.env.VITE_API_URL}/auth/validate`,
	// 			{},
	// 			{
	// 				headers: {
	// 					Authorization: splitToken,
	// 				},
	// 			}
	// 		)
	// 		.then(() => {
	// 			if (location.pathname === "/auth/login" || location.pathname === "/") {
	// 				navigate("/dashboard");
	// 			}
	// 		})
	// 		.catch(() => {
	// 			localStorage.removeItem("restaurante_token");
	// 			if(location.pathname != '/landing') {
	// 				navigate("/auth/login");
	// 			}
	// 		});
	// }, [navigate, location.pathname]);

	return (
		<>
			<Routes>
				<Route>
					{publicRoutes.map((route, idx) => (
						<Route
							path={route.path}
							element={<DefaultLayout>{route.element}</DefaultLayout>}
							key={idx}
						/>
					))}
				</Route>

				<Route>
					{privateRoutes.map((route, idx) => (
						<Route
							path={route.path}
							element={
								<VerticalLayout>{route.element}</VerticalLayout>
							}
							key={idx}
						/>
					))}
				</Route>

				<Route>
					{ticketRoute.map((route, idx) => (
						<Route
							path={route.path}
							element={<DefaultLayout>{route.element}</DefaultLayout>}
							key={idx}
						/>
					))}
				</Route>

				<Route path="*" element={<PaginaMantenimiento />} />
			</Routes>
		</>
	);
};

export { AllRoutes };
