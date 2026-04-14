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
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
      {genres?.map((genreItem: string, i: number) => (
        <Typography
          key={i}
          component="span"
          sx={{
            color: "text.primary",
            fontSize: 13,
            fontWeight: 600,
            textTransform: "uppercase",
            border: "1px solid #34D399",
            letterSpacing: 1,
            px: 1,
            borderRadius: 1,
          }}
        >
          {genreItem}
        </Typography>
      ))}

      <Typography
        component="span"
        sx={{
          fontSize: 13,
          opacity: 0.7,
          ml: 1,
        }}
      >
        {rated}
      </Typography>
    </Box>
  );
}
