import styles from "@/app/movie/[slug]/page.module.scss";
import { Movie } from "@/app/types/Types";
import { Box, Typography } from "@mui/material";

export default function MovieMeta({ movie }: { movie: Movie }) {
  const items = [
    movie.Year,
    movie.Type,
    movie.Type === "series" ? `${movie.totalSeasons} seasons` : null,
    movie.Runtime,
  ].filter(Boolean);

  return (
    <Box className={styles.typeWrapper}>
      {items.map((item, i) => (
        <Typography key={i} component="span" className={styles.type}>
          {item}
        </Typography>
      ))}
    </Box>
  );
}
