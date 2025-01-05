interface Data {
    total: number;
    date: Date;
    products: {
        productId: number;
        quantity: number;
    }[];
}
export declare const CreateOrder: (data: Data) => Promise<any>;
export {};
