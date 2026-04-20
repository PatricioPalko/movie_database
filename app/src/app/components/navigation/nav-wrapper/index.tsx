import { Box, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { IMenuItem } from "../../../types/Types";
import LoginButtons from "../login/buttons";
import NavItem from "../nav-item";

const NAV_ITEMS: IMenuItem[] = [
  { label: "Home", url: "/" },
  { label: "Favorites", url: "/favorites" },
];

const NavigationWrapper = () => {
  return (
    <Box
      component="nav"
      sx={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 10,
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(0,0,0,0.4)",
        borderBottom: "2px solid rgba(255,255,255,0.1)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <Image src="/assets/logo.svg" width={90} height={40} alt="logo" />
        </Link>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            py: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            {NAV_ITEMS.map((page: IMenuItem, id: number) => (
              <NavItem key={id} page={page} />
            ))}
          </Box>
        </Box>
        <LoginButtons />
      </Container>
    </Box>
  );
};

export default NavigationWrapper;
