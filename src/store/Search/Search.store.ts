import { create } from "zustand";

export interface SearchStore {
    search: string;
    setSearch: (search: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  search: "",
  setSearch: (search: string) => set({ search }),
}));