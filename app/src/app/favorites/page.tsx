"use client";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import "../globals.scss";
import styles from "../page.module.scss";

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

export default function FavoriteMoviesPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMoviesFromLocalStorage = async () => {
      setLoading(true);
      try {
        if (typeof window !== "undefined") {
          const storedFavorites = localStorage.getItem("favoriteMoviesList");
          if (storedFavorites) {
            setFavoriteMovies(JSON.parse(storedFavorites));
          }
        }
      } catch (error) {
        console.error("Error fetching movies from local storage:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesFromLocalStorage();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Container maxWidth={"xl"} className={styles.container}>
          <Box className={styles.tpl}>
            <Typography variant="h1" component={"h1"} className={styles.title}>
              Favorite movies
            </Typography>
            <MoviesList
              movies={favoriteMovies}
              loading={loading}
              isFavorites={true}
            />
          </Box>
        </Container>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
