import { Box } from "@mui/material";

const MovieCardContainer = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      display: "block",
      width: "100%",
      height: 320,
      position: "relative",
      borderRadius: 1,
      overflow: "hidden",
      cursor: "pointer",
    }}
  >
    {children}
  </Box>
);

export default MovieCardContainer;
