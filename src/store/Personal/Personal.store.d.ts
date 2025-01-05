interface Personal {
    id: number;
    name: string;
    email: string;
    permissions: string[];
    password?: string;
}
export type StatePersonal = {
    id: number;
    name: string;
    email: string;
    permissions: string[];
    password?: string;
    setId: (id: number) => void;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPermissions: (permissions: string[]) => void;
    setPassword: (password: string) => void;
    personal: Personal[];
    setPersonal: (personal: Personal[]) => void;
};
export declare const usePersonalStore: import("zustand").UseBoundStore<import("zustand").StoreApi<StatePersonal>>;
export {};
