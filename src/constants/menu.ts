export interface MenuItemTypes {
	key: string
	label: string
	isTitle?: boolean
	icon?: string
	url?: string
	badge?: {
		variant: string
		text: string
	}
	parentKey?: string
	target?: string
	children?: MenuItemTypes[]
}

const MENU_ITEMS: MenuItemTypes[] = [
	{
		key: 'navegacion',
		label: 'Navegacion',
		isTitle: true,
	},
	{
		key: 'dashboard',
		label: 'Dashboards',
		isTitle: false,
		icon: 'ri-home-4-line',
		badge: {
			variant: 'bg-success rounded-full',
			text: '2',
		},
		children: [
			{
				key: 'dashboard-ventas',
				label: 'Ventas',
				url: '/dashboard/ventas',
				parentKey: 'dashboard',
				icon: 'ri-shopping-cart-2-line',
			},
			{
				key: 'dashboard-caja',
				label: 'Caja',
				url: '/dashboard/caja',
				parentKey: 'dashboard',
				icon: 'ri-currency-line',
			},
		],
	},
	{
		key: 'gestion',
		label: 'Gestion',
		isTitle: true,
	},
	{
		key: 'productos',
		label: 'Productos',
		isTitle: false,
		icon: 'ri-store-2-line',
		url: '/dashboard/productos',
	},
	{
		key: 'personal',
		label: 'Personal',
		isTitle: false,
		icon: 'ri-user-2-line',
		url: '/dashboard/personal',
	},
	{
		key: 'inventario',
		label: 'Inventario',
		isTitle: false,
		icon: 'ri-archive-line',
		url: '/dashboard/inventario',
	},
	{
		key: 'ordenes',
		label: 'Ordenes',
		isTitle: false,
		icon: 'ri-file-list-3-line',
		url: '/dashboard/ordenes',
	},
	{
		key: 'categorias',
		label: 'Categorias',
		isTitle: false,
		icon: 'ri-folder-3-line',
		url: '/dashboard/categorias',
	},
	{
		key: 'menutitle',
		label: 'Menu',
		isTitle: true,
	},
	{
		key: 'menu',
		label: 'Menu',
		isTitle: false,
		icon: 'ri-menu-line',
		url: '/menu/postres',
	},
]

export { MENU_ITEMS }
