"use client";
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
        <h1>Movie database</h1>
        <span>Simple movie database by CODERAMA</span>
        <FilterInput />
        <MoviesList movies={movies} loading={loading} isFavorites={false} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
