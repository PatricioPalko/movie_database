"use client";

import { Button } from "@mui/material";
import { IconType } from "react-icons";

export default function OAuthButton({
  label,
  icon: Icon,
  onClick,
  color,
}: {
  label: string;
  icon: IconType;
  onClick: () => void;
  color?: string;
}) {
  return (
    <Button
      fullWidth
      onClick={onClick}
      sx={{
        borderRadius: "6px",
        py: 1.2,
        textTransform: "none",
        fontWeight: 500,
        color: "white",
        backgroundColor: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        transition: "all 0.25s ease",
        my: 0.5,
        "&:hover": {
          backgroundColor: "rgba(52, 211, 153, 0.15)",
          border: "1px solid rgba(52, 211, 153, 0.4)",
          boxShadow: "0 0 0 2px rgba(52,211,153,0.2)",
        },
      }}
    >
      <Icon style={{ marginRight: 10, color }} />
      {label}
    </Button>
  );
}
