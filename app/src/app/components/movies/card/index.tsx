import styles from "@/components/MovieCard.module.scss";
import { MovieCardProps } from "@/types/Types";
import { Box, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineImageNotSupported, MdOutlineStar } from "react-icons/md";

export const MovieCard = ({ movie, isFavorites }: MovieCardProps) => (
  <ListItem className={styles.movieItem}>
    <Link href={`/movie/${movie.imdbID}`} className={styles.movieLink}>
      {movie.Poster !== "N/A" ? (
        <Image
          src={movie.Poster}
          alt="background"
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="(min-width: 808px) 50vw, 100vw"
          className={styles.backgroundImage}
        />
      ) : (
        <Box className={styles.noImage}>
          <MdOutlineImageNotSupported />
        </Box>
      )}
      <Box className={styles.gradient} />
      {isFavorites && (
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
