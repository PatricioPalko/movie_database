"use client";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilterInput from "./components/FilterInput";
import MoviesList from "./components/MoviesList";
import "./globals.scss";
import { fetchAllMovies } from "./helpers/fetch-data";
import { RootState } from "./lib/store";
import styles from "./page.module.scss";

interface Movie {
  Title: string;
  imdbID: string;
  Poster: string;
  Year: string;
}

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  const movieState = useSelector((state: RootState) => state.movieFilter.value);

  useEffect(() => {
    const fetchMoviesByName = async () => {
      setLoading(true);
      try {
        const response = await fetchAllMovies(movieState);
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesByName();
  }, [movieState]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Container maxWidth={"xl"} className={styles.container}>
          <Box className={styles.tpl}>
            <Typography variant="h1" component={"h1"} className={styles.title}>
              Movie database
            </Typography>
            <Typography component={"span"}>
              Simple movie database by CODERAMA
            </Typography>
            <FilterInput />
            <MoviesList movies={movies} loading={loading} isFavorites={false} />
          </Box>
        </Container>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
