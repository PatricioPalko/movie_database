import { Box, Container } from "@mui/material";
import { IMenuItem } from "../../../types/Types";
import NavItem from "../nav-item";

const NAV_ITEMS: IMenuItem[] = [
  { label: "Home", url: "/" },
  { label: "Favourites", url: "/favourites" },
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
      <Container maxWidth="xl">
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
      </Container>
    </Box>
  );
};

export default NavigationWrapper;
