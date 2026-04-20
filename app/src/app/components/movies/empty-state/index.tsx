import { Typography } from "@mui/material";

const EmptyState = ({ message }: { message: string }) => (
  <Typography
    sx={{ color: "text.secondary", textAlign: "center", py: 4, opacity: 0.7 }}
  >
    {message}
  </Typography>
);

export default EmptyState;
