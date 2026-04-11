import styles from "@/app/movie/[slug]/page.module.scss";
import { Box } from "@mui/material";
import MovieDetailsInfoItem from "../detail-info-item";

export default function MovieDetailsInfoWrapper({
  details,
}: {
  details: Record<string, string>;
}) {
  return (
    <Box className={styles.detailedInfoWrapper}>
      {Object.entries(details ?? {}).map(([key, value], i) => (
        <MovieDetailsInfoItem key={i} title={key} value={value} />
      ))}
    </Box>
  );
}
