import { RouteObject } from 'react-router-dom';
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

const authRoutes: RouteObject[] = [
  {
    path: '/auth/login',
    element: <Login />,
  }
];

const dashboardRoutes: RouteObject[] = [
  {
    path: '/dashboard',
    element: <DashboardInicial />,
  },
  {
    path: '/dashboard/ventas',
    element: <PaginaVentas />,
  },
  {
    path: '/dashboard/caja',
    element: <PaginaCaja />,
  },
  {
    path: '/dashboard/productos',
    element: <PaginaProductos />,
  },
  {
    path: '/dashboard/personal',
    element: <PaginaPersonal />
  },
  {
    path: '/dashboard/inventario',
    element: <PaginaInventario />
  },
  {
    path: '/dashboard/ordenes',
    element: <PaginaOrdenes />
  },
  {
    path: '/menu/:categorianame',
    element: <PaginaMenuMeseros />,
  },
  {
    path: '/menu/search/:productname',
    element: <PaginaSearch />,
  },
  {
    path: '/dashboard/categorias',
    element: <PaginaCategorias />,
  },
  {
    path: '/ver/:id',
    element: <VisualizarOrden />,
  },
  {
    path: '/dashboard/caja/:id',
    element: <BoxId />,
  }
];

const ticketRoutes: RouteObject[] = [
  {
    path: '/print/:id',
    element: <Ticket />,
  },
  {
    path: 'dashboard/caja/print/:id',
    element: <PrintBox />,
  }
];

const publicRoutes = [...authRoutes];
const privateRoutes = [...dashboardRoutes];
const ticketRoute = [...ticketRoutes];

export { publicRoutes, privateRoutes, ticketRoute };