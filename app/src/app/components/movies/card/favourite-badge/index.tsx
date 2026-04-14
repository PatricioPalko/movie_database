import { Box } from "@mui/material";
import { MdOutlineStar } from "react-icons/md";

const FavouriteBadge = () => (
  <Box
    sx={{
      position: "absolute",
      top: 10,
      right: 10,
      zIndex: 2,
      width: 34,
      height: 34,
      borderRadius: "50%",
      backgroundColor: "rgba(10, 15, 28, 0.95)",
      border: "1px solid rgba(52, 211, 153, 0.9)",
      boxShadow: "0 0 14px rgba(52, 211, 153, 0.9)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <MdOutlineStar style={{ color: "#34D399", fontSize: 20 }} />
  </Box>
);

export default FavouriteBadge;
