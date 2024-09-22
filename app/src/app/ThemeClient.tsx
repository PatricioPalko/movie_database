"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
    h1: {
      fontSize: "3em",
      fontWeight: "600",
    },
    h3: {
      fontSize: "3em",
      fontWeight: "600",
    },
  },
});

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
