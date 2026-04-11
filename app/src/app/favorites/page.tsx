"use client";

import { useStore } from "@/store/useStore";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import MoviesList from "../components/movies/list";
import "../globals.scss";
import styles from "../page.module.scss";

export default function FavoriteMoviesPage() {
  const { favorites } = useStore();

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

        <Container maxWidth="xl" className={styles.container}>
          <Box className={styles.tpl}>
            <Typography variant="h1" className={styles.title}>
              Favorite movies
            </Typography>

            <MoviesList movies={favorites} loading={false} isFavorites={true} />
          </Box>
        </Container>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
