import MovieDetailPoster from "@/app/components/movies/detail/poster";
import { Box } from "@mui/material";

const MovieCardImage = ({ movie }: { movie: any }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        transition: "transform 0.35s ease",
        "&:hover": { transform: "scale(1.03)" },
      }}
    >
      <MovieDetailPoster poster={movie.Poster} title={movie.Title} />
    </Box>
  );
};

export default MovieCardImage;
