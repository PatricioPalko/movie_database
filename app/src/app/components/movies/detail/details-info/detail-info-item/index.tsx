import { Box } from "@mui/material";

export default function MovieDetailsInfoItem({
  title,
  value,
  isLast,
}: {
  title: string;
  value: string;
  isLast: boolean;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        py: 1,
        borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Box sx={{ color: "text.secondary" }}>{title}</Box>
      <Box sx={{ color: "text.secondary", opacity: 0.6 }}>{String(value)}</Box>
    </Box>
  );
}
