import { Container } from "@mui/material";
import HomeHero from "./components/hero";
import MoviesListWrapper from "./components/movies/list-wrapper";
import "./globals.scss";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Container maxWidth={"xl"} className={styles.container}>
          <HomeHero />
          <MoviesListWrapper />
        </Container>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
