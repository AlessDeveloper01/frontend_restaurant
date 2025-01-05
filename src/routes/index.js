import { jsx as _jsx } from "react/jsx-runtime";
import Login from '../pages/auth/Login';
import DashboardInicial from '../pages/dashboard/DashboardInicial';
import PaginaVentas from '../pages/dashboard/Ventas/Ventas';
import PaginaCaja from '../pages/dashboard/Caja/Caja';
import PaginaProductos from '../pages/gestion/Productos/Productos';
import PaginaPersonal from '../pages/gestion/Personal/Personal';
import PaginaInventario from '../pages/gestion/Inventario/Inventario';
import PaginaOrdenes from '../pages/gestion/Ordenes/Ordenes';
import PaginaMenuMeseros from '../pages/menu/menumeseros/Menu';
import PaginaCategorias from '@/pages/gestion/Categorias/Categoria';
import Ticket from '@/pages/dashboard/Ventas/components/Ticket';
import VisualizarOrden from '@/pages/gestion/Ordenes/pages/VisualizarOrden';
import PaginaSearch from '@/pages/menu/search/search';
import BoxId from '@/pages/dashboard/Caja/pages/BoxId';
import PrintBox from '@/pages/dashboard/Caja/pages/Print';
export * from './Routes';
const authRoutes = [
    {
        path: '/auth/login',
        element: _jsx(Login, {}),
    }
];
const dashboardRoutes = [
    {
        path: '/dashboard',
        element: _jsx(DashboardInicial, {}),
    },
    {
        path: '/dashboard/ventas',
        element: _jsx(PaginaVentas, {}),
    },
    {
        path: '/dashboard/caja',
        element: _jsx(PaginaCaja, {}),
    },
    {
        path: '/dashboard/productos',
        element: _jsx(PaginaProductos, {}),
    },
    {
        path: '/dashboard/personal',
        element: _jsx(PaginaPersonal, {})
    },
    {
        path: '/dashboard/inventario',
        element: _jsx(PaginaInventario, {})
    },
    {
        path: '/dashboard/ordenes',
        element: _jsx(PaginaOrdenes, {})
    },
    {
        path: '/menu/:categorianame',
        element: _jsx(PaginaMenuMeseros, {}),
    },
    {
        path: '/menu/search/:productname',
        element: _jsx(PaginaSearch, {}),
    },
    {
        path: '/dashboard/categorias',
        element: _jsx(PaginaCategorias, {}),
    },
    {
        path: '/ver/:id',
        element: _jsx(VisualizarOrden, {}),
    },
    {
        path: '/dashboard/caja/:id',
        element: _jsx(BoxId, {}),
    }
];
const ticketRoutes = [
    {
        path: '/print/:id',
        element: _jsx(Ticket, {}),
    },
    {
        path: 'dashboard/caja/print/:id',
        element: _jsx(PrintBox, {}),
    }
];
const publicRoutes = [...authRoutes];
const privateRoutes = [...dashboardRoutes];
const ticketRoute = [...ticketRoutes];
export { publicRoutes, privateRoutes, ticketRoute };
