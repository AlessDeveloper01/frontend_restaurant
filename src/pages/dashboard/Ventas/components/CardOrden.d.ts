interface CardOrdenProps {
    venta: {
        id: number;
        mesero: string;
        total: number;
        status: boolean;
        orderReadyAt: string;
        date: string;
        orderProducts: {
            id: number;
            orderId: number;
            productId: number;
            quantity: number;
            product: {
                id: number;
                name: string;
                price: number;
                category: number;
                status: boolean;
            };
        }[];
    };
}
declare const CardOrden: ({ venta }: CardOrdenProps) => import("react/jsx-runtime").JSX.Element;
export default CardOrden;
