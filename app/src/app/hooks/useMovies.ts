import { getAllMovies } from "@/app/helpers/fetch-data";
import { useStore } from "@/store/useStore";
import { useQuery } from "@tanstack/react-query";
import type { ChangeEvent } from "react";
import { useCallback } from "react";
import type { Page } from "../types/Types";
const fetchMoviesByPage = async (
  page: number,
  searchTerm: string,
): Promise<Page> => {
  if (!searchTerm) return { movies: [], nextPage: null, totalPages: 0 };
  const response = await getAllMovies(searchTerm, page);
  const data = await response.json();
  if (data.Response === "False") throw new Error("Failed to fetch movies");
  return {
    movies: data.Search,
    nextPage: null,
    totalPages: Math.ceil(data.totalResults / 10),
  };
};

export function useMovies() {
  const { searchValue, page, setSearchValue, setPage } = useStore();

  const { data, isLoading, error } = useQuery<Page>({
    queryKey: ["movies", searchValue, page],
    queryFn: () => fetchMoviesByPage(page, searchValue),
    enabled: !!searchValue,
    placeholderData: (prev: Page | undefined) => prev,
  });

  const handleSearch = useCallback(
    (value: string) => {
      setSearchValue(value);
      setPage(1);
    },
    [setSearchValue, setPage],
  );

  const handlePageChange = useCallback(
    (_: ChangeEvent<unknown>, value: number) => {
      setPage(value);
    },
    [setPage],
  );

  return {
    movies: data?.movies ?? [],
    totalPages: data?.totalPages ?? 0,
    currentPage: page,
    searchValue,
    isLoading,
    error,
    handleSearch,
    handlePageChange,
  };
}
