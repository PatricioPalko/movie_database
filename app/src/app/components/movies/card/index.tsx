import styles from "@/app/components/MovieCard.module.scss";
import MovieDetailPoster from "@/app/components/movies/detail/poster";
import { MovieCardProps } from "@/app/types/Types";
import { Box, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import { MdOutlineStar } from "react-icons/md";

export const MovieCard = ({ movie, isFavourites }: MovieCardProps) => (
  <ListItem className={styles.movieItem}>
    <Link href={`/movie/${movie.imdbID}`} className={styles.movieLink}>
      <MovieDetailPoster poster={movie.Poster} title={movie.Title} />
      <Box className={styles.gradient} />
      {isFavourites && (
        <MdOutlineStar className={`${styles.icon} ${styles.liked}`} />
      )}
      <Box className={styles.infoWrapper}>
        <Typography component="span" className={styles.year}>
          {movie.Year}
        </Typography>
        <Typography component="h3" className={styles.title}>
          {movie.Title}
        </Typography>
      </Box>
    </Link>
  </ListItem>
);

export default MovieCard;
