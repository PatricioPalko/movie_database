import styles from "@/movie/[slug]/page.module.scss";
import { Box } from "@mui/material";
import Image from "next/image";
import { MdOutlineImageNotSupported } from "react-icons/md";

type Props = {
  poster: string;
  title: string;
};

export default function MovieDetailPoster({ poster, title }: Props) {
  if (!poster || poster === "N/A") {
    return (
      <Box className={styles.noImage}>
        <MdOutlineImageNotSupported />
      </Box>
    );
  }

  return (
    <Image
      src={poster}
      alt={title}
      width={1000}
      height={1000}
      className={styles.image}
      priority
    />
  );
}
