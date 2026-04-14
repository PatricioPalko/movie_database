import { Container } from "@mui/material";
import HomeHero from "./components/hero";
import MoviesListWrapper from "./components/movies/list-wrapper";

export default function Home() {
  return (
    <div>
      <main>
        <Container maxWidth={"xl"} sx={{ paddingTop: { xs: 4, md: 0 } }}>
          <HomeHero />
          <MoviesListWrapper />
        </Container>
      </main>
      <footer></footer>
    </div>
  );
}
