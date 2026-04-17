"use client";

import { Stack } from "@mui/material";
import { useSession } from "next-auth/react";
import LoginButton from "../button";
import User from "../user/wrapper";

export default function LoginButtons() {
  const { data: session } = useSession();

  if (session) return <User />;

  return (
    <Stack direction="row" spacing={2}>
      <LoginButton variant="outlined" href="/login">
        Log in
      </LoginButton>

      <LoginButton
        variant="contained"
        href="/login"
        sx={{
          backgroundColor: "#34D399",
          color: "#022c22",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#2bbf88",
          },
        }}
      >
        Register
      </LoginButton>
    </Stack>
  );
}
