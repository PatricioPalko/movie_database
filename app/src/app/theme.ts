import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#34D399",
      secondary: "#F9FAFB",
      disabled: "#9CA3AF",
    },
    background: {
      default: "#0A0F1C",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "inherit",
    h1: {
      fontSize: "4em",
      fontWeight: "600",
      color: "text.primary",
    },
    h3: {
      fontSize: "3em",
      fontWeight: "600",
      color: "#212730",
    },
    body1: {
      color: "white",
    },
  },
});

export default theme;
