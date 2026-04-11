import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { IMenuItem } from "../../../types/Types";
import styles from "../../Navbar.module.scss";
import NavItem from "../nav-item";

const NAV_ITEMS: IMenuItem[] = [
  { label: "Home", url: "/" },
  { label: "Favourites", url: "/favourites" },
];

const NavigationWrapper = () => {
  return (
    <nav className={`${styles.main} ${styles.navbar} ${styles.navWrap}`}>
      <Container className={styles.navWrapper} maxWidth="xl">
        <Box className={styles.navbarCollapse}>
          <Box className={styles.navbarNav}>
            {NAV_ITEMS.map((page: IMenuItem, id: number) => (
              <NavItem key={id} page={page} />
            ))}
          </Box>
        </Box>
      </Container>
    </nav>
  );
};

export default NavigationWrapper;
