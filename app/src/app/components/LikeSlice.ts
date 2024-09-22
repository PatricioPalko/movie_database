"use client";

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface Rating {
  Source: string;
  Value: string;
}

interface Movie {
  Title: string;
  imdbID: string;
  Poster: string;
  Year: string;
  Plot: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Country: string;
  Awards: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  Type: string;
  Runtime: string;
  totalSeasons?: string;
  Rated: string;
}

interface FavoritesState {
  favoriteMoviesList: Movie[];
}

const initialState: FavoritesState = {
  favoriteMoviesList: [],
};

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      const movieInFavoritesList = state.favoriteMoviesList.find(
        (movie) => movie.imdbID === action.payload.imdbID
      )
      if (!movieInFavoritesList) {
        state.favoriteMoviesList.push(action.payload);
        localStorage.setItem("favoriteMoviesList", JSON.stringify(state.favoriteMoviesList));
      }
    },
    removeFromFavorites: (state,action: PayloadAction<string>) => {
      state.favoriteMoviesList = state.favoriteMoviesList.filter((movie) => movie.imdbID !== action.payload);
      localStorage.setItem("favoriteMoviesList", JSON.stringify(state.favoriteMoviesList));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = likeSlice.actions;
export default likeSlice.reducer;