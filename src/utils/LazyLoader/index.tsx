import styles from "./LazyLoader.module.scss";
import useApp from "../../hooks/useApp";

const LazyLoader = () => {
  const { darkMode } = useApp();

  return (
    <>
      <main className={darkMode ? styles.Dark : styles.Light}>
        <section className={styles.LazyLoader}>
          <h2>...Loading</h2>
        </section>
      </main>
    </>
  );
};

export default LazyLoader;
