"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import MoviesList from "../components/movies/list";
import "../globals.scss";
import styles from "../page.module.scss";
import { Movie } from "../types/Types";

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
        <Image
          src="/assets/bg.jpg"
          alt="background"
          fill
          priority
          style={{ objectFit: "cover" }}
          className={styles.bg}
        />
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
