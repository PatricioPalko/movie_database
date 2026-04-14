import GaugeChart from "@/app/components/movies/detail/rating/gauge";
import RatingItem from "@/app/components/movies/detail/rating/rating-item";
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
    <Box
      sx={{
        display: "flex",
        gap: 8,
        mt: 3,
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <GaugeChart imdbRating={imdbRating} imdbVotes={imdbVotes} />

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {Ratings?.map((rating: Rating, id: number) => (
          <RatingItem rating={rating} key={id} />
        ))}
      </Box>
    </Box>
  );
}
