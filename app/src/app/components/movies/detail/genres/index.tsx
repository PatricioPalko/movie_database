import styles from "@/app/movie/[slug]/page.module.scss";
import { Box, Typography } from "@mui/material";

export default function MovieGenres({
  genre,
  rated,
}: {
  genre: string;
  rated: string;
}) {
  const genres = genre?.split(", ");

  return (
    <Box className={styles.genres}>
      {genres?.map((genreItem: string, i: number) => (
        <Typography key={i} component="span" className={styles.genre}>
          {genreItem}
        </Typography>
      ))}
      <Typography component="span" className={styles.rated}>
        {rated}
      </Typography>
    </Box>
  );
}
