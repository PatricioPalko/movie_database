"use client";
import { MoviesListProps } from "@/app/types/Types";
import { Container, List } from "@mui/material";
import { useSearchParams } from "next/navigation";
import MovieCardWrapper from "../card/wrapper";
import EmptyState from "../empty-state";

type Mode = "search" | "favourites";

const MoviesList = ({
  movies,
  loading,
  error,
  mode = "search",
}: MoviesListProps & { mode?: Mode }) => {
  const searchParams = useSearchParams();
  const searchValue = mode === "search" ? (searchParams.get("q") ?? "") : "";

  if (mode === "search") {
    const isEmptySearch = !searchValue;
    const isTooShort = searchValue.length > 0 && searchValue.length < 3;

    if (isEmptySearch) return <EmptyState message="Search for movies" />;
    if (isTooShort) return <EmptyState message="Type at least 3 characters" />;
  }

  if (loading) return <EmptyState message="Loading..." />;
  if (error) return <EmptyState message="Something went wrong" />;

  if (mode === "search" && movies.length === 0) {
    return <EmptyState message={`No movies found for "${searchValue}"`} />;
  }

  if (mode === "favourites" && movies.length === 0) {
    return <EmptyState message="No favourites yet" />;
  }

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
          <MovieCardWrapper key={movie.imdbID} movie={movie} />
        ))}
      </List>
    </Container>
  );
};

export default MoviesList;
