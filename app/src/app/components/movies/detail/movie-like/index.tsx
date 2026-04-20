"use client";

import { Movie } from "@/app/types/Types";
import { useStore } from "@/store/useStore";
import { Box, Button, Typography } from "@mui/material";
import { MdOutlineStar, MdOutlineStarOutline } from "react-icons/md";

export default function MovieLike({ movie }: { movie: Movie | undefined }) {
  const { favorites, addFavorite, removeFavorite } = useStore();

  const isFavorite = favorites.some((f) => f.imdbID === movie?.imdbID);

  const handleLikeClick = () => {
    if (!movie) return;

    if (isFavorite) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <Box>
      <Button onClick={handleLikeClick} sx={{ minWidth: 0, gap: 1 }}>
        {isFavorite ? (
          <MdOutlineStar size={22} color="#FBBF24" />
        ) : (
          <MdOutlineStarOutline size={22} color="#FBBF24" />
        )}

        <Typography
          sx={{
            color: "#FBBF24",
            fontSize: 16,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {isFavorite ? "In your list" : "Add to favorites"}
        </Typography>
      </Button>
    </Box>
  );
}
