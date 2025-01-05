type Personal = {
    name: string;
    email: string;
    password: string;
    permissions: string;
};
export declare const updateUserById: (id: number, personal: Personal) => Promise<any>;
export {};
