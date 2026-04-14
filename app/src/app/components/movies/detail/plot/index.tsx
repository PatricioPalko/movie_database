import { Box, Typography } from "@mui/material";

export default function MoviePlot({ plot }: { plot: string }) {
  if (!plot || plot === "N/A") return null;

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
        description
      </Typography>
      <Typography
        component="p"
        sx={{
          color: "text.secondary",
          opacity: 0.8,

          lineHeight: 1.6,
          maxWidth: 700,
        }}
      >
        {plot}
      </Typography>
    </Box>
  );
}
