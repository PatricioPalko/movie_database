import FilterInput from "./components/FilterInput";
import MoviesList from "./components/MoviesList";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Movie database</h1>
        <span>Simple movie database by CODERAMA</span>
        <FilterInput />
        <MoviesList />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
