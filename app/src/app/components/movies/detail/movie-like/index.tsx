"use client";
import "@/globals.scss";
import { addToFavorites, removeFromFavorites } from "@/helpers/LikeSlice";
import { RootState } from "@/lib/store";
import styles from "@/movie/[slug]/page.module.scss";
import { Movie } from "@/types/Types";
import { Box, Button, Typography } from "@mui/material";
import { MdOutlineStar, MdOutlineStarOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export default function MovieLike({ movie }: { movie: Movie | undefined }) {
  const dispatch = useDispatch();

  const favoriteMovies = useSelector(
    (state: RootState) => state.like.favoriteMoviesList,
  );
  const isFavorite = favoriteMovies.some(
    (favMovie: Movie) => favMovie.imdbID === movie?.imdbID,
  );

  const handleLikeClick = () => {
    if (movie) {
      if (isFavorite) {
        dispatch(removeFromFavorites(movie.imdbID));
      } else {
        dispatch(addToFavorites(movie));
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
