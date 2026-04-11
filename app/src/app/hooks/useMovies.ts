import { getAllMovies } from "@/helpers/fetch-data";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertValue } from "../helpers/InsertValueSlice";
import { RootState } from "../lib/store";
import { Page } from "../types/Types";

const fetchMoviesByPage = async (pageParam: number, movieState: string) => {
  if (!movieState) return { movies: [], nextPage: pageParam, totalPages: 0 };
  const response = await getAllMovies(movieState, pageParam);
  const data = await response.json();
  if (data.Response === "False") throw new Error("Failed to fetch movies");
  return {
    movies: data.Search,
    nextPage:
      pageParam < Math.ceil(data.totalResults / 10) ? pageParam + 1 : null,
    totalPages: Math.ceil(data.totalResults / 10),
  };
};

export function useMovies() {
  const searchTerm = useSelector((state: RootState) => state.movieFilter.value);
  const dispatch = useDispatch();
  const [movieState, setMovieState] = useState<string>(searchTerm);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Obnov stav z localStorage pri prvom rende
  useEffect(() => {
    const savedTerm = localStorage.getItem("searchTerm");
    const savedPage = localStorage.getItem("currentPage");
    if (searchTerm !== savedTerm) {
      dispatch(insertValue(searchTerm));
      setCurrentPage(1);
      localStorage.setItem("currentPage", "1");
    } else {
      dispatch(insertValue(searchTerm));
      setCurrentPage(savedPage ? parseInt(savedPage) : 1);
    }
  }, [searchTerm, dispatch]);

  const { data, isLoading, error } = useInfiniteQuery<Page>({
    queryKey: ["movies", movieState, currentPage],
    queryFn: ({ queryKey }) =>
      fetchMoviesByPage(queryKey[2] as number, queryKey[1] as string),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
  });

  const handleSearch = useCallback((value: string) => {
    localStorage.setItem("searchTerm", value);
    setMovieState(value);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback(
    (_: React.ChangeEvent<unknown>, value: number) => {
      setCurrentPage(value);
      localStorage.setItem("currentPage", value.toString());
    },
    [],
  );

  const movies = data?.pages.flatMap((page) => page.movies) ?? [];
  const totalPages = data?.pages[0]?.totalPages ?? 0;

  return {
    movies,
    totalPages,
    currentPage,
    isLoading,
    error,
    handleSearch,
    handlePageChange,
  };
}
