import styles from "@/movie/[slug]/page.module.scss";
import { Box, Typography } from "@mui/material";
import { FaAward } from "react-icons/fa";

export default function MovieAwards({ awards }: { awards: string }) {
  if (!awards || awards === "N/A") return null;

  return (
    <Box className={styles.awardsWrapper}>
      <FaAward className={styles.awardIcon} />
      <Typography component="span" className={styles.paragraphYellow}>
        Awards:
      </Typography>
      <Typography component="span" className={styles.paragraph}>
        {awards}
      </Typography>
    </Box>
  );
}
