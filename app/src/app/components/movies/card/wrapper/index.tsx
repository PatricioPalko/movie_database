import PrefetchLink from "@/app/components/prefetch-link";
import { Movie, MovieCardProps } from "@/app/types/Types";
import { useStore } from "@/store/useStore";
import { Box, ListItem } from "@mui/material";
import MovieCardContainer from "../container";
import FavouriteBadge from "../favourite-badge";
import MovieCardImage from "../image";
import MovieCardOverlay from "../overlay";

export const MovieCardWrapper = ({ movie }: MovieCardProps) => {
  const { favourites } = useStore();

  const isFavourite = favourites.some((f: Movie) => f.imdbID === movie.imdbID);

  return (
    <ListItem sx={{ listStyle: "none", p: 1 }}>
      <PrefetchLink href={`/movie/${movie.imdbID}`}>
        <MovieCardContainer>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
            }}
          >
            <MovieCardImage movie={movie} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
              pointerEvents: "none",
            }}
          />
          {isFavourite && <FavouriteBadge />}
          <MovieCardOverlay movie={movie} />
        </MovieCardContainer>
      </PrefetchLink>
    </ListItem>
  );
};

export default MovieCardWrapper;
