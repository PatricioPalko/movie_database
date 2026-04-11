import "@/globals.scss";
import styles from "@/movie/[slug]/page.module.scss";
import { Rating } from "@/types/Types";
import { Box, Typography } from "@mui/material";

const extractRating = (input: string): string | null => {
  const match = input.match(/^(\d+(\.\d+)?)/);
  return match ? match[0] : null;
};

export default function RatingItem({ rating }: { rating: Rating }) {
  return (
    <Box className={styles.ratingItem}>
      <Box className={styles.ratingValueWrapper}>
        <Box className={styles.ratingValue}>{extractRating(rating.Value)}</Box>
        <Typography component={"span"} className={styles.ratingValueSmaller}>
          {rating.Value.replace(extractRating(rating.Value)!, "")}
        </Typography>
      </Box>
      <Box className={styles.ratingSource}>{rating.Source}</Box>
    </Box>
  );
}
