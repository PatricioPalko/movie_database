"use client";

import { Movie } from "@/app/types/Types";
import { useStore } from "@/store/useStore";
import { Box, Button, Typography } from "@mui/material";
import { MdOutlineStar, MdOutlineStarOutline } from "react-icons/md";

export default function MovieLike({ movie }: { movie: Movie | undefined }) {
  const { favourites, addFavourite, removeFavourite } = useStore();

  const isFavourite = favourites.some((f) => f.imdbID === movie?.imdbID);

  const handleLikeClick = () => {
    if (!movie) return;

    if (isFavourite) {
      removeFavourite(movie.imdbID);
    } else {
      addFavourite(movie);
    }
  };

  return (
    <Box>
      <Button onClick={handleLikeClick} sx={{ minWidth: 0, gap: 1 }}>
        {isFavourite ? (
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
          {isFavourite ? "In your list" : "Add to favourites"}
        </Typography>
      </Button>
    </Box>
  );
}
