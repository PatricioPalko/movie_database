import GaugeChart from "@/app/components/movies/detail/rating/gauge";
import RatingItem from "@/app/components/movies/detail/rating/rating-item";
import "@/app/globals.scss";
import styles from "@/app/movie/[slug]/page.module.scss";
import { Rating } from "@/app/types/Types";
import { Box } from "@mui/material";

export default function MovieRatingWrapper({
  imdbRating,
  imdbVotes,
  Ratings,
}: {
  imdbRating: number;
  imdbVotes: number;
  Ratings: Rating[];
}) {
  return (
    <Box className={styles.ratingWrapper}>
      <GaugeChart imdbRating={imdbRating} imdbVotes={imdbVotes} />
      <Box className={styles.ratingItemsWrapper}>
        {Ratings?.map((rating: Rating, id: number) => (
          <RatingItem rating={rating} key={id} />
        ))}
      </Box>
    </Box>
  );
}
