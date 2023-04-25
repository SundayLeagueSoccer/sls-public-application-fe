import styles from "../styles/LandingPageHero.module.scss";
import hero_image from "../images/hero_image.png";

const LandingPageHero = () => {
  return (
    <>
      <section className={styles.LandingPageHero}>
        <div className={styles.left}>
          <h1>
            Welcome to the Home of <span>Champs</span>{" "}
          </h1>
          <h4>
            Don’t miss the chance to train with the best. Game on Champions!
          </h4>
          <div className={styles.hero_buttons}>
            <button className={styles.players_stats}>Players Stats</button>
            <button className={styles.sls_history}>SLS History</button>
          </div>
        </div>
        <img src={hero_image} alt="hero-image" />
      </section>
    </>
  );
};

export default LandingPageHero;
