"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function MovieNotFound() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 3,
          textAlign: "center",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
          backdropFilter: "blur(12px)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
          Movie not found
        </Typography>

        <Typography sx={{ mb: 3, color: "text.secondary", fontSize: 14 }}>
          This movie doesn't exist or couldn't be loaded
        </Typography>

        <Stack spacing={1}>
          <Button
            component={Link}
            href="/"
            variant="contained"
            sx={{
              backgroundColor: "#34D399",
              color: "#022c22",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#2bbf88",
              },
            }}
          >
            Browse movies
          </Button>

          <Button
            component={Link}
            href="/favorites"
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "rgba(255,255,255,0.3)",
              "&:hover": {
                borderColor: "#34D399",
                boxShadow: "0 0 10px rgba(52, 211, 153, 0.4)",
              },
            }}
          >
            Go to favorites
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
