"use client";
import styles from "@/app/page.module.scss";
import { Box } from "@mui/material";
import { useMovies } from "../../../hooks/useMovies";
import FilterInput from "../../filter-input";
import MoviesList from "../list";
import MoviesPagination from "../pagination";

export default function MoviesListWrapper() {
  const {
    movies,
    totalPages,
    currentPage,
    isLoading,
    error,
    handleSearch,
    handlePageChange,
  } = useMovies();

  return (
    <Box className={styles.tpl}>
      <FilterInput onSearch={handleSearch} />
      <MoviesList
        movies={movies}
        loading={isLoading}
        isFavorites={false}
        error={error}
      />
      {movies.length > 0 && (
        <MoviesPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={handlePageChange}
        />
      )}
    </Box>
  );
}
