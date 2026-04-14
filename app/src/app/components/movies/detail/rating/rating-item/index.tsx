import { Rating } from "@/app/types/Types";
import { Box, Typography } from "@mui/material";

const extractRating = (input: string): string | null => {
  const match = input.match(/^(\d+(\.\d+)?)/);
  return match ? match[0] : null;
};

export default function RatingItem({ rating }: { rating: Rating }) {
  const mainValue = extractRating(rating.Value);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5 }}>
        <Box sx={{ color: "text.secondary", fontSize: 20, fontWeight: 600 }}>
          {mainValue}
        </Box>

        <Typography
          component="span"
          sx={{ color: "text.secondary", opacity: 0.6, fontSize: 14 }}
        >
          {rating.Value.replace(mainValue!, "")}
        </Typography>
      </Box>

      <Box sx={{ color: "text.secondary", opacity: 0.5, fontSize: 14 }}>
        {rating.Source}
      </Box>
    </Box>
  );
}
