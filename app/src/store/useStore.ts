import type { Movie } from "@/app/types/Types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  favourites: Movie[];
  searchValue: string;
  page: number;

  addFavourite: (movie: Movie) => void;
  removeFavourite: (id: string) => void;
  setSearchValue: (searchValue: string) => void;
  setPage: (p: number) => void;
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      favourites: [],
      searchValue: "",
      page: 1,
      addFavourite: (movie) =>
        set((state) => {
          if (state.favourites.some((m) => m.imdbID === movie.imdbID)) {
            return state;
          }
          return { favourites: [...state.favourites, movie] };
        }),

      removeFavourite: (id) =>
        set((state) => ({
          favourites: state.favourites.filter((m) => m.imdbID !== id),
        })),

      setSearchValue: (searchValue) => set({ searchValue }),
      setPage: (p) => set({ page: p }),
    }),
    {
      name: "favouriteMoviesList",
    },
  ),
);
