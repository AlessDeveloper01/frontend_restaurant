interface DataUpdateOrder {
    id: number;
    status?: boolean;
    orderReadyAt?: string;
    total?: number;
    products?: {
        productId: number;
        quantity: number;
        orderId: number;
    }[];
}
export declare const updateOrder: (data: DataUpdateOrder) => Promise<any>;
export {};
