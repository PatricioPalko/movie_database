"use client";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { FilterInput } from "../filter-input";

export default function HomeHero() {
  const theme = useTheme();
  console.log(theme.palette.text.primary);
  return (
    <Box
      sx={{
        position: "relative",
        height: "40vh",
        width: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        paddingBottom: 8,
      }}
    >
      <Image
        src="/assets/bg.jpg"
        alt="background"
        fill
        priority
        style={{
          objectFit: "cover",
          filter: "brightness(1) contrast(1.1)",
          transform: "scale(1.05)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3), rgba(0,0,0,0.9))",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          color: "#F9FAFB",
          px: 3,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            letterSpacing: 2,
            color: "text.primary",
            mb: 2,
            textShadow: "0 0 5px rgba(52, 211, 153, 0.4)",
          }}
        >
          Movie database
        </Typography>
        <Typography
          sx={{
            fontSize: 18,
            opacity: 0.9,
          }}
        >
          Discover movies, ratings and details instantly
        </Typography>
        <Box sx={{ mt: 4 }}>
          <FilterInput />
        </Box>
      </Box>
    </Box>
  );
}
