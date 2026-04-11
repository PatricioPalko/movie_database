"use client";
import "@/app/globals.scss";
import styles from "@/app/movie/[slug]/page.module.scss";
import { Movie } from "@/app/types/Types";
import { useStore } from "@/store/useStore";
import { Box, Button, Typography } from "@mui/material";
import { MdOutlineStar, MdOutlineStarOutline } from "react-icons/md";

export default function MovieLike({ movie }: { movie: Movie | undefined }) {
  const { favorites, addFavorite, removeFavorite } = useStore();

  const isFavorite = favorites.some(
    (favoriteMovie) => favoriteMovie.imdbID === movie?.imdbID,
  );

  const handleLikeClick = () => {
    if (movie) {
      if (isFavorite) {
        removeFavorite(movie.imdbID);
      } else {
        addFavorite(movie);
      }
    }
  };

  return (
    <Box>
      <Button onClick={handleLikeClick} className={styles.likeBtn}>
        {isFavorite === false ? (
          <MdOutlineStarOutline
            onClick={handleLikeClick}
            className={styles.icon}
          />
        ) : (
          <MdOutlineStar
            onClick={handleLikeClick}
            className={`${styles.icon} ${styles.liked}`}
          />
        )}
      </Button>
      <Typography component={"span"} className={styles.likeText}>
        {isFavorite === false ? "Like it now" : "I love this!"}
      </Typography>
    </Box>
  );
}
