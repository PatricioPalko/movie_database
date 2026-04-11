import "@/globals.scss";
import styles from "@/movie/[slug]/page.module.scss";
import { Box, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

export default function GaugeChart({
  imdbRating,
  imdbVotes,
}: {
  imdbRating: number;
  imdbVotes: number;
}) {
  return (
    <Box className={styles.gaugeWrapper}>
      <Gauge
        value={Number(imdbRating) * 10}
        startAngle={0}
        endAngle={360}
        innerRadius="85%"
        outerRadius="100%"
        width={100}
        height={100}
        sx={() => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 24,
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: "#ffd369",
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: "#393e46",
          },
        })}
        className={styles.gauge}
      />
      <Typography component={"span"} className={styles.votes}>
        {`${imdbVotes} votes`}
      </Typography>
    </Box>
  );
}
