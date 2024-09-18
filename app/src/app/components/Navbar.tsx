"use client";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/Link";
import { useState } from "react";
import styles from "./Navbar.module.scss";

interface MenuItem {
  label: string;
  url: string;
}

interface NavigationProps {
  navbar: MenuItem[];
}

const navbar: MenuItem[] = [
  { label: "Home", url: "/" },
  { label: "Detail", url: "/detail" },
  { label: "Favorites", url: "/favorites" },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Domov");

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <>
      <nav className={`${styles.main} ${styles.navbar} ${styles.navWrap}`}>
        <Container className={styles.navWrapper} maxWidth="xl">
          <Box className={styles.navbarCollapse}>
            <Box className={styles.navbarNav}>
              {navbar &&
                navbar.map((page: MenuItem, id: number) => (
                  <Link
                    className={`${styles.navItem} ${
                      activeItem === page.label ? styles.active : ""
                    } `}
                    href={`${page.url === "domov" ? "/" : `/${page.url}`}`}
                    key={id}
                    onClick={() => handleItemClick(page.label)}
                  >
                    <Typography component="span">{page.label}</Typography>
                  </Link>
                ))}
            </Box>
          </Box>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
