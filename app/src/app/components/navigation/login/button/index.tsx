"use client";

import { Button } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { useRouter } from "next/navigation";

export default function LoginButton({
  variant,
  href,
  children,
  sx,
}: {
  variant: "outlined" | "contained";
  href: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}) {
  const router = useRouter();

  return (
    <Button
      variant={variant}
      onClick={() => router.push(href)}
      sx={{
        color: "white",
        borderColor: "rgba(255,255,255,0.4)",
        "&:hover": {
          borderColor: "text.primary",
          boxShadow: "0 0 10px rgba(52, 211, 153, 0.7)",
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}
