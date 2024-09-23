"use client";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import bg from "../../public/assets/bg.jpg";
import FilterInput from "./components/FilterInput";
import MoviesList from "./components/MoviesList";
import "./globals.scss";
import { fetchAllMovies } from "./helpers/fetch-data";
import styles from "./page.module.scss";

interface Movie {
  Title: string;
  imdbID: string;
  Poster: string;
  Year: string;
}

const fetchAllMoviesByName = async (movieState: string) => {
  const response = await fetchAllMovies(movieState);
  const data = await response.json();
  return data.Search;
};

export default function Home() {
  const [movieState, setMovieState] = useState<string>("");

  useEffect(() => {
    fetchAllMoviesByName("");
  }, []);

  const {
    data: movies,
    isLoading,
    error,
  } = useQuery(["movies", movieState], () => fetchAllMoviesByName(movieState), {
    enabled: !!movieState,
  });

  const handleSearch = (value: string) => {
    setMovieState(value);
  };

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
          </Box>
        </Container>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
