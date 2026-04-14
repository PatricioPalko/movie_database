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
    <Box sx={{ display: "flex", gap: 2, mt: 1, flexWrap: "wrap" }}>
      {items.map((item, i) => (
        <Typography
          key={i}
          component="span"
          sx={{ color: "text.secondary", opacity: 0.7, fontSize: 13 }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
}
