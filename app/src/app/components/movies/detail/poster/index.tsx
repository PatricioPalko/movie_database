"use client";
import styles from "@/app/movie/[slug]/page.module.scss";
import { Box } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineImageNotSupported } from "react-icons/md";

type Props = {
  poster: string;
  title: string;
};

export default function MovieDetailPoster({ poster, title }: Props) {
  const [hasError, setHasError] = useState(false);

  if (!poster || poster === "N/A" || hasError) {
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
      className={styles.image}
      priority
      fill
      style={{ objectFit: "cover" }}
      sizes="( max-width: 600px ) 100vw, 300px"
      onError={() => setHasError(true)}
    />
  );
}
