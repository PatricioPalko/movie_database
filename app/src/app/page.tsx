"use client";
import { Box, Container, PaginationItem, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import bg from "../../public/assets/bg.jpg";
import FilterInput from "./components/FilterInput";
import MoviesList from "./components/MoviesList";
import "./globals.scss";
import { fetchAllMovies } from "./helpers/fetch-data";
import styles from "./page.module.scss";

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

interface Page {
  totalPages: number;
  nextPage: number | null;
  movies: Movie[];
}

const fetchMoviesByPage = async (pageParam: number, movieState: string) => {
  if (!movieState) {
    return {
      movies: [],
      nextPage: pageParam,
      totalPages: 0,
    };
  }
  const response = await fetchAllMovies(movieState, pageParam);
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error("Failed to fetch movies");
  }

  return {
    movies: data.Search,
    nextPage:
      pageParam < Math.ceil(data.totalResults / 10) ? pageParam + 1 : null,
    totalPages: Math.ceil(data.totalResults / 10),
  };
};

export default function Home() {
  const [movieState, setMovieState] = useState<string>(() => {
    return localStorage.getItem("searchTerm") || "";
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    data: moviesData,
    isLoading,
    error,
  } = useInfiniteQuery<Page>(
    ["movies", movieState, currentPage],
    ({ queryKey }) =>
      fetchMoviesByPage(queryKey[2] as number, queryKey[1] as string),
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );

  useEffect(() => {
    localStorage.setItem("searchTerm", movieState);
  }, [movieState]);

  const handleSearch = (value: string) => {
    setMovieState(value);
    setCurrentPage(1);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    localStorage.setItem("currentPage", value.toString());
  };

  useEffect(() => {
    const savedPageNumber = localStorage.getItem("currentPage");
    setCurrentPage(Number(savedPageNumber) || 1);
  }, []);

  const movies = moviesData?.pages.flatMap((page) => page.movies) || [];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Box
          style={{ backgroundImage: `url(${bg.src})` }}
          className={styles.bg}
        ></Box>
        <Container maxWidth={"xl"} className={styles.container}>
          <Box className={styles.tpl}>
            <Typography variant="h1" component={"h1"} className={styles.title}>
              Movie database
            </Typography>
            <Typography component={"span"}>
              Simple movie database by CODERAMA
            </Typography>
            <FilterInput onSearch={handleSearch} />
            <MoviesList
              movies={movies}
              loading={isLoading}
              isFavorites={false}
              error={error}
            />
            {movies.length > 0 && (
              <Stack spacing={2}>
                <Pagination
                  count={moviesData?.pages[0]?.totalPages || 0}
                  size="small"
                  page={currentPage}
                  onChange={handlePageChange}
                  shape="rounded"
                  className={styles.pagination}
                  renderItem={(item) => (
                    <PaginationItem
                      {...item}
                      className={styles.paginationItem}
                      sx={{
                        "&.Mui-selected": {
                          backgroundColor: "#74777d",
                          color: "#ffd369 !important",
                        },
                      }}
                    />
                  )}
                />
              </Stack>
            )}
          </Box>
        </Container>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
