"use client";

import { Box, Typography } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import OAuthButton from "../components/auth/button";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace("/dashboard");
    }
  }, [session, router]);

  if (status === "loading") {
    return null;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 3,
          textAlign: "center",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
          backdropFilter: "blur(12px)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 1, color: "text.primary" }}
        >
          Sign in
        </Typography>

        <Typography sx={{ mb: 3, color: "text.secondary", fontSize: 14 }}>
          Continue to movie database
        </Typography>

        <OAuthButton
          label="Continue with Google"
          icon={FaGoogle}
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        />

        <OAuthButton
          label="Continue with GitHub"
          icon={FaGithub}
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        />
        <Typography sx={{ my: 3, color: "text.secondary", fontSize: 14 }}>
          or continue to{" "}
          <Link href="/" style={{ textDecoration: "none" }}>
            <Typography
              component="span"
              sx={{
                color: "text.primary",
                cursor: "pointer",
                fontSize: 14,
                "&:hover": {
                  borderBottom: "1px solid",
                },
              }}
            >
              home page
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
