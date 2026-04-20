import { Box, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

export default function GaugeChart({
  imdbRating,
  imdbVotes,
}: {
  imdbRating: string;
  imdbVotes: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Gauge
        value={Number(imdbRating) * 10}
        startAngle={0}
        endAngle={360}
        innerRadius="85%"
        outerRadius="100%"
        width={100}
        height={100}
        sx={{
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 24,
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: "#34D399",
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: "rgba(255, 255, 255, 0.1)",
          },
        }}
      />

      <Typography
        component="span"
        sx={{
          opacity: 0.7,
          fontSize: 12,
        }}
      >
        {`${imdbVotes} votes`}
      </Typography>
    </Box>
  );
}
