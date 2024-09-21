"use client";
import { Box, Container, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../globals.scss";
import { fetchAllMovies } from "../helpers/fetch-data";
import { RootState } from "../lib/store";
import styles from "./MoviesList.module.scss";

interface Movie {
  Title: string;
  imdbID: string;
  Poster: string;
  Year: string;
}

const MoviesList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const countState = useSelector((state: RootState) => state.movieFilter.value);

  useEffect(() => {
    const fetchMoviesByName = async () => {
      setLoading(true);
      try {
        const response = await fetchAllMovies(countState);
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
  }, [countState]);

  return (
    <>
      {loading ? (
        <Box className={styles.noResults}>Loading the list of movies</Box>
      ) : movies.length === 0 ? (
        <Box className={styles.noResults}>No results, try again</Box>
      ) : (
        <Container disableGutters maxWidth={"xl"} className={styles.moviesList}>
          <Box className={styles.tpl}>
            <List className={styles.wrapper}>
              {movies.map((movie, id) => (
                <ListItem key={id} className={styles.movieItem}>
                  <Link
                    href={`/movie/${movie.imdbID}`}
                    className={styles.movieLink}
                  >
                    <Box
                      className={styles.backgroundImage}
                      style={{ backgroundImage: `url(${movie.Poster})` }}
                    ></Box>
                    <Box className={styles.gradient}></Box>
                    <Box className={styles.infoWrapper}>
                      <Typography component={"span"} className={styles.year}>
                        {movie.Year}
                      </Typography>
                      <Typography component={"h3"} className={styles.title}>
                        {movie.Title}
                      </Typography>
                    </Box>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
      )}
    </>
  );
};

export default MoviesList;
