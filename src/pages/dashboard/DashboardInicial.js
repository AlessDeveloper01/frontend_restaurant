import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { PageBreadcrumb } from '@/components';
import MarcaAgua from '@/components/MarcaAgua';
const DashboardInicial = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumb, { title: "Dashboard", subName: 'Dashboard' }), _jsxs("div", { className: 'mt-10', children: [_jsx("h1", { className: 'text-4xl font-bold text-gray-800 text-center md:text-left', children: "Bienvenido a tu panel de administracion!" }), _jsxs("div", { className: 'flex flex-col justify-center items-center h-96 relative text-center md:text-left', children: [_jsx("h1", { className: 'text-4xl font-bold text-gray-800', children: "\u00A1Bienvenido!" }), _jsx("p", { className: 'text-gray-600', children: "Seleccion a la izquierda el modulo que deseas administrar." }), _jsx(MarcaAgua, {})] })] })] }));
};
export default DashboardInicial;
