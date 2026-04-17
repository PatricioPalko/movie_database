"use client";

import { Box, Divider, Menu, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UserAvatar from "../avatar";
import UserMenuList from "../menu-list";

export default function User() {
  const { data: session } = useSession();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  if (!session) return null;

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <UserAvatar
        image={session.user?.image ?? ""}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      />

      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              mt: 1.5,
              minWidth: 220,
              borderRadius: 3,
              backdropFilter: "blur(14px)",
              backgroundColor: "rgba(0,0,0,0.75)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "white",
              overflow: "hidden",
            },
          },
        }}
      >
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography>{session.user?.name}</Typography>
          <Typography
            variant="body2"
            sx={{ opacity: 0.6, fontSize: "0.85rem" }}
          >
            {session.user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        <UserMenuList onClose={handleClose} />
      </Menu>
    </>
  );
}
