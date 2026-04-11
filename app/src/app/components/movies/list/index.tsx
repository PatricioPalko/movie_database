import styles from "@/app/components/MoviesList.module.scss";
import { MoviesListProps } from "@/app/types/Types";
import { Box, Container, List } from "@mui/material";
import MovieCard from "../card";

const EmptyState = ({ message }: { message: string }) => (
  <Box className={styles.noResults}>{message}</Box>
);

const MoviesList = ({
  movies,
  loading,
  isFavorites,
  error,
}: MoviesListProps) => {
  if (loading) return <EmptyState message="Loading the list of movies" />;
  if (error) return <EmptyState message="Something went wrong, try again" />;
  if (movies.length === 0)
    return <EmptyState message="No results, try again" />;

  return (
    <Container disableGutters maxWidth="xl" className={styles.moviesList}>
      <Box className={styles.tpl}>
        <List className={styles.wrapper}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorites={isFavorites}
            />
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default MoviesList;
