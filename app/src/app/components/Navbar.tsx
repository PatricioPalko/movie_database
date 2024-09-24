"use client";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMenuItem } from "../../../types/Types";
import styles from "./Navbar.module.scss";

const navbar: IMenuItem[] = [
  { label: "Home", url: "/" },
  { label: "Favorites", url: "/favorites" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className={`${styles.main} ${styles.navbar} ${styles.navWrap}`}>
        <Container className={styles.navWrapper} maxWidth="xl">
          <Box className={styles.navbarCollapse}>
            <Box className={styles.navbarNav}>
              {navbar &&
                navbar.map((page: IMenuItem, id: number) => (
                  <Link
                    key={id}
                    href={page.url}
                    className={`${styles.navItem} ${
                      pathname === page.url ? styles.active : ""
                    } `}
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
