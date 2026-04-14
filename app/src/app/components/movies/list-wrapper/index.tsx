"use client";

import { Box } from "@mui/material";
import { useMovies } from "../../../hooks/useMovies";
import MoviesList from "../list";
import MoviesPagination from "../pagination";

export default function MoviesListWrapper() {
  const {
    movies,
    totalPages,
    currentPage,
    isLoading,
    error,
    handlePageChange,
  } = useMovies();

  return (
    <Box sx={{ px: 3, py: 4, maxWidth: 1400, mx: "auto" }}>
      <MoviesList movies={movies} loading={isLoading} error={error} />

      {movies.length > 0 && (
        <MoviesPagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )}
    </Box>
  );
}
