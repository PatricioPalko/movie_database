import styles from "@/app/movie/[slug]/page.module.scss";
import { Typography } from "@mui/material";

export default function MoviePlot({ plot }: { plot: string }) {
  if (!plot || plot === "N/A") return null;

  return (
    <Typography component="p" className={styles.paragraph}>
      {plot}
    </Typography>
  );
}
