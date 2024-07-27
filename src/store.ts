import { create } from "zustand";
interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchQuery?: string;
}
interface GameQueryStore {
  gameQuery: GameQuery;
  setGenre: (genreId: number) => void;
  setPlatform: (platformId: number) => void;
  setSort: (sortOrder: string) => void;
  setSearch: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenre: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatform: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSort: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setSearch: (searchQuery) => set(() => ({ gameQuery: { searchQuery } })),
}));

export default useGameQueryStore;
