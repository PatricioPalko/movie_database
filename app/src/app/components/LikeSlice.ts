"use client";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { FavoritesState, Movie } from "../../../types/Types";

const initialState: FavoritesState = {
  favoriteMoviesList: [],
};

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      const movieInFavoritesList = state.favoriteMoviesList.find(
        (movie:Movie) => movie.imdbID === action.payload.imdbID
      )
      if (!movieInFavoritesList) {
        state.favoriteMoviesList.push(action.payload);
        localStorage.setItem("favoriteMoviesList", JSON.stringify(state.favoriteMoviesList));
      }
    },
    removeFromFavorites: (state,action: PayloadAction<string>) => {
      state.favoriteMoviesList = state.favoriteMoviesList.filter((movie:Movie) => movie.imdbID !== action.payload);
      localStorage.setItem("favoriteMoviesList", JSON.stringify(state.favoriteMoviesList));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = likeSlice.actions;
export default likeSlice.reducer;