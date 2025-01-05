export interface SearchStore {
    search: string;
    setSearch: (search: string) => void;
}
export declare const useSearchStore: import("zustand").UseBoundStore<import("zustand").StoreApi<SearchStore>>;
