"use client";

import { useStore } from "@/store/useStore";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import MoviesList from "../components/movies/list";

export default function FavouriteMoviesPage() {
  const { favourites } = useStore();

  return (
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      <Image
        src="/assets/bg.jpg"
        alt="background"
        fill
        priority
        style={{ objectFit: "cover", opacity: 0.08 }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          pt: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "text.secondary",
            mb: 4,
            fontWeight: 700,
          }}
        >
          Favourite movies
        </Typography>

        <MoviesList movies={favourites} loading={false} mode="favourites" />
      </Container>
    </Box>
  );
}
