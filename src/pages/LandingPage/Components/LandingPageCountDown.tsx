import styles from "../styles/LandingPageCountDown.module.scss";
import useApp from "../../../hooks/useApp";

const LandingPageCountDown = () => {
  const { darkMode } = useApp();
  return (
    <>
      <section className={styles.LandingPageCountDown}>
        <div
          className={
            darkMode ? styles.top_container_dark : styles.top_container_light
          }
        >
          <h2>Next Match Day</h2>
          <div className={styles.figures_container}>
            <h5>05</h5>
            <h5>05</h5>
            <h5>05</h5>
            <h5>05</h5>
          </div>
        </div>
        <div className={styles.bottom_container}>
          <h6>Days</h6>
          <h6>Hours</h6>
          <h6>Mins</h6>
          <h6>Secs</h6>
        </div>
      </section>
    </>
  );
};

export default LandingPageCountDown;
