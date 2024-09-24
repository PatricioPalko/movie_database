"use client";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import bg from "../../../public/assets/bg.jpg";
import { Movie } from "../../../types/Types";
import MoviesList from "../components/MoviesList";
import "../globals.scss";
import styles from "../page.module.scss";
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
        <Box
          style={{ backgroundImage: `url(${bg.src})` }}
          className={styles.bg}
        ></Box>
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
