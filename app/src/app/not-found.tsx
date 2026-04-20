"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
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
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          404
        </Typography>

        <Typography sx={{ mb: 3, color: "text.secondary" }}>
          Page not found
        </Typography>

        <Button
          component={Link}
          href="/"
          variant="contained"
          sx={{
            backgroundColor: "#34D399",
            color: "#022c22",
            fontWeight: 600,
            boxShadow: "0 0 10px rgba(52, 211, 153, 0.4)",
            "&:hover": {
              backgroundColor: "#2bbf88",
              boxShadow: "0 0 16px rgba(52, 211, 153, 0.5)",
            },
          }}
        >
          Go home
        </Button>
      </Box>
    </Box>
  );
}
