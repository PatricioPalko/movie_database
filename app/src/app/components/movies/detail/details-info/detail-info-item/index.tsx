import styles from "@/movie/[slug]/page.module.scss";
import { Box } from "@mui/material";

export default function MovieDetailsInfoItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <Box className={styles.item}>
      <Box className={styles.title}>{title}</Box>
      <Box className={styles.value}>{String(value)}</Box>
    </Box>
  );
}
