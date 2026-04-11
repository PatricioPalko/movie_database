"use client";
import { Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMenuItem } from "../../../types/Types";
import styles from "../../Navbar.module.scss";

const NavItem = ({ page }: { page: IMenuItem }) => {
  const pathname = usePathname();

  return (
    <Link
      href={page.url}
      className={`${styles.navItem} ${
        pathname === page.url ? styles.active : ""
      } `}
    >
      <Typography component="span">{page.label}</Typography>
    </Link>
  );
};

export default NavItem;
