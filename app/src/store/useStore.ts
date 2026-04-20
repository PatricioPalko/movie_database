import type { Movie } from "@/app/types/Types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  favorites: Movie[];
  searchValue: string;
  page: number;

  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: string) => void;
  setSearchValue: (searchValue: string) => void;
  setPage: (p: number) => void;
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      favorites: [],
      searchValue: "",
      page: 1,
      addFavorite: (movie) =>
        set((state) => {
          if (state.favorites.some((m) => m.imdbID === movie.imdbID)) {
            return state;
          }
          return { favorites: [...state.favorites, movie] };
        }),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((m) => m.imdbID !== id),
        })),

      setSearchValue: (searchValue) => set({ searchValue }),
      setPage: (p) => set({ page: p }),
    }),
    {
      name: "favoriteMoviesList",
    },
  ),
);
