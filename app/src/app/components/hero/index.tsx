import styles from "@/app/page.module.scss";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function HomeHero() {
  return (
    <Box>
      <Image
        src="/assets/bg.jpg"
        alt="background"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
      <Box className={styles.content}>
        <Typography variant="h1" component="h1" className={styles.title}>
          Movie database
        </Typography>
        <Typography component="span">Simple movie database</Typography>
      </Box>
    </Box>
  );
}
