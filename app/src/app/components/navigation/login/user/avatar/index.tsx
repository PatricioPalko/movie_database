"use client";

import { Avatar } from "@mui/material";

export default function UserAvatar({
  image,
  onClick,
}: {
  image?: string | null;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <Avatar
      src={image ?? ""}
      onClick={onClick}
      sx={{
        cursor: "pointer",
        width: 40,
        height: 40,
        border: "2px solid rgba(255,255,255,0.2)",
        transition: "all 0.2s ease",
        "&:hover": {
          transform: "scale(1.06)",
          borderColor: "#34D399",
          boxShadow: "0 0 10px rgba(52, 211, 153, 0.3)",
        },
      }}
    />
  );
}
