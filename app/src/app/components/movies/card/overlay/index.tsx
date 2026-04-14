import { Box, Typography } from "@mui/material";
const MovieCardOverlay = ({ movie }: { movie: any }) => (
  <Box
    sx={{
      position: "absolute",
      bottom: 0,
      p: 2,
      zIndex: 2,
    }}
  >
    <Typography sx={{ fontSize: 12, opacity: 0.8, color: "text.secondary" }}>
      {movie.Year}
    </Typography>
    <Typography sx={{ fontWeight: 500, color: "text.primary" }}>
      {movie.Title}
    </Typography>
  </Box>
);

export default MovieCardOverlay;
