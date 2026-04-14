import { MoviesListProps } from "@/app/types/Types";
import { Container, List, Typography } from "@mui/material";
import MovieCard from "../card";

const EmptyState = ({ message }: { message: string }) => (
  <Typography
    sx={{ color: "text.secondary", textAlign: "center", py: 4, opacity: 0.7 }}
  >
    {message}
  </Typography>
);

const MoviesList = ({ movies, loading, error }: MoviesListProps) => {
  if (loading) return <EmptyState message="Loading the list of movies" />;
  if (error) return <EmptyState message="Something went wrong" />;
  if (!movies.length) return <EmptyState message="No results" />;

  return (
    <Container maxWidth="xl">
      <List
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 1,
          p: 0,
        }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </List>
    </Container>
  );
};

export default MoviesList;
