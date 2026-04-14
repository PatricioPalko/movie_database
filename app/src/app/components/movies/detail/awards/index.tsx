import { Box, Typography } from "@mui/material";
import { FaAward } from "react-icons/fa";

export default function MovieAwards({ awards }: { awards: string }) {
  if (!awards || awards === "N/A") return null;

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
      <FaAward color="#FBBF24" />

      <Typography component="span" sx={{ color: "#FBBF24", fontWeight: 600 }}>
        Awards:
      </Typography>

      <Typography
        component="span"
        sx={{ color: "text.secondary", opacity: 0.8 }}
      >
        {awards}
      </Typography>
    </Box>
  );
}
