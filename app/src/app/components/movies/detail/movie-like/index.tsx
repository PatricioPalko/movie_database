"use client";
import "@/app/globals.scss";
import styles from "@/app/movie/[slug]/page.module.scss";
import { Movie } from "@/app/types/Types";
import { useStore } from "@/store/useStore";
import { Box, Button, Typography } from "@mui/material";
import { MdOutlineStar, MdOutlineStarOutline } from "react-icons/md";

export default function MovieLike({ movie }: { movie: Movie | undefined }) {
  const { favourites, addFavourite, removeFavourite } = useStore();

  const isFavourite = favourites.some(
    (favouriteMovie) => favouriteMovie.imdbID === movie?.imdbID,
  );

  const handleLikeClick = () => {
    if (movie) {
      if (isFavourite) {
        removeFavourite(movie.imdbID);
      } else {
        addFavourite(movie);
      }
    }
  };

  return (
    <Box>
      <Button onClick={handleLikeClick} className={styles.likeBtn}>
        {isFavourite === false ? (
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
        {isFavourite === false ? "Like it now" : "I love this!"}
      </Typography>
    </Box>
  );
}
