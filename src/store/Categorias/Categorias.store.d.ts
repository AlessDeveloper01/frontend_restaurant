export type Categoria = {
    id: number;
    name: string;
    status: boolean;
};
type CategoriasState = {
    id: number;
    name: string;
    status: boolean;
    categorias: Categoria[];
    setCategorias: (categorias: Categoria[]) => void;
    setStatus: (status: boolean) => void;
    setName: (name: string) => void;
    setId: (id: number) => void;
};
export declare const useCategorias: import("zustand").UseBoundStore<import("zustand").StoreApi<CategoriasState>>;
export {};
