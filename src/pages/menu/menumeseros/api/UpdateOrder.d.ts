interface Data {
    total: number;
    date: Date;
    products: {
        productId: number;
        quantity: number;
    }[];
}
export declare const UpdateOrder: (id: number, data: Data) => Promise<any>;
export {};
