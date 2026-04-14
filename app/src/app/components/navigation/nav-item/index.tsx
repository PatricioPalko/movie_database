"use client";

import { Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMenuItem } from "../../../types/Types";

const NavItem = ({ page }: { page: IMenuItem }) => {
  const pathname = usePathname();

  const isActive = pathname === page.url;

  return (
    <Link
      href={page.url}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Typography
        component="span"
        sx={(theme) => ({
          px: 2,
          py: 1,
          borderRadius: 2,
          cursor: "pointer",
          transition: "0.2s",
          color: isActive ? "text.primary" : "text.secondary",
          fontWeight: 500,
          position: "relative",
          "&::after": isActive
            ? {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 2,
                backgroundColor: "text.primary",
                borderRadius: 2,
              }
            : {},
          "&:hover": {
            color: "text.primary",
          },
        })}
      >
        {page.label}
      </Typography>
    </Link>
  );
};

export default NavItem;
