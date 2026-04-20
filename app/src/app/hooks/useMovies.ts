import { getAllMovies } from "@/app/helpers/fetch-data";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { getSearchState, saveSearchState } from "../helpers/searchMemory";
import type { Page } from "../types/Types";

const fetchMoviesByPage = async (
  page: number,
  searchTerm: string,
): Promise<Page> => {
  if (!searchTerm || searchTerm.trim().length < 3) {
    return { movies: [], nextPage: null, totalPages: 0 };
  }

  const response = await getAllMovies(searchTerm, page);
  const data = await response.json();

  if (data.Response === "False") {
    return { movies: [], nextPage: null, totalPages: 0 };
  }

  return {
    movies: data.Search ?? [],
    nextPage: null,
    totalPages: Math.ceil(Number(data.totalResults ?? 0) / 10),
  };
};

export function useMovies() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchValue = searchParams.get("q") ?? "";
  const page = Number(searchParams.get("page") ?? 1);

  const { data, isLoading, error } = useQuery<Page>({
    queryKey: ["movies", searchValue, page],
    queryFn: () => fetchMoviesByPage(page, searchValue),
    // placeholderData: (prev) => prev,
  });

  const handleSearch = (value: string) => {
    const params = new URLSearchParams();

    if (value) params.set("q", value);
    params.set("page", "1");
    saveSearchState(value, 1);
    router.replace(`?${params.toString()}`);
  };

  const handlePageChange = (_: any, value: number) => {
    const params = new URLSearchParams();

    if (searchValue) params.set("q", searchValue);
    params.set("page", String(value));
    saveSearchState(searchValue, value);
    router.replace(`?${params.toString()}`);
  };

  useEffect(() => {
    if (!searchValue) {
      const last = getSearchState();

      if (last?.q) {
        router.replace(`/?q=${last.q}&page=${last.page ?? 1}`);
      }
    }
  }, []);

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
