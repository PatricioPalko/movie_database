import { Box, Container, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { MdOutlineImageNotSupported, MdOutlineStar } from "react-icons/md";
import "../globals.scss";
import styles from "./MoviesList.module.scss";

interface Movie {
  Title: string;
  imdbID: string;
  Poster: string;
  Year: string;
}

const MoviesList = ({
  movies,
  loading,
  isFavorites,
  error,
}: {
  movies: Movie[];
  loading: boolean;
  isFavorites: boolean;
  error: any;
}) => {
  return (
    <>
      {loading ? (
        <Box className={styles.noResults}>Loading the list of movies</Box>
      ) : error ? (
        <Box className={styles.noResults}>Error</Box>
      ) : movies && movies.length === 0 ? (
        <Box className={styles.noResults}>No results, try again</Box>
      ) : (
        <Container disableGutters maxWidth={"xl"} className={styles.moviesList}>
          <Box className={styles.tpl}>
            <List className={styles.wrapper}>
              {movies &&
                movies.map((movie, id) => (
                  <ListItem key={id} className={styles.movieItem}>
                    <Link
                      href={`/movie/${movie.imdbID}`}
                      className={styles.movieLink}
                    >
                      {movie.Poster !== "N/A" ? (
                        <Box
                          className={styles.backgroundImage}
                          style={{ backgroundImage: `url(${movie.Poster})` }}
                        ></Box>
                      ) : (
                        <Box className={styles.noImage}>
                          <MdOutlineImageNotSupported />
                        </Box>
                      )}
                      <Box className={styles.gradient}></Box>
                      {isFavorites && (
                        <MdOutlineStar
                          className={`${styles.icon} ${styles.liked}`}
                        />
                      )}
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
