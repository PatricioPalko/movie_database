"use client";

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
  const [loading, setLoading] = useState(true);
  if (!poster || poster === "N/A" || hasError) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
          color: "text.secondary",
          borderRadius: 2,
          backdropFilter: "blur(6px)",
        }}
      >
        <MdOutlineImageNotSupported size={42} opacity={0.6} />
        <span style={{ fontSize: 12, opacity: 0.6 }}>No image available</span>
      </Box>
    );
  }

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      {loading && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
            animation: "pulse 1.5s infinite",
          }}
        />
      )}

      <Image
        src={poster}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        onLoad={() => setLoading(false)}
        priority
        onError={() => setHasError(true)}
        sizes="(max-width: 768px) 50vw, 20vw"
      />
    </Box>
  );
}
