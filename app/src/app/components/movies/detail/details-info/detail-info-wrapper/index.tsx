import { Box, Typography } from "@mui/material";
import MovieDetailsInfoItem from "../detail-info-item";

export default function MovieDetailsInfoWrapper({
  details,
}: {
  details: Record<string, string>;
}) {
  return (
    <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography
        sx={{
          fontSize: 14,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "text.secondary",
          opacity: 0.7,
          mt: 2,
          fontWeight: 500,
        }}
      >
        Details
      </Typography>
      {Object.entries(details ?? {}).map(([key, value], i) => (
        <MovieDetailsInfoItem
          key={i}
          title={key}
          value={value}
          isLast={i === Object.entries(details ?? {}).length - 1}
        />
      ))}
    </Box>
  );
}
