import styles from "../styles/LandingPageHero.module.scss";
import hero_image from "../images/hero_image.png";
import mobile_hero_image from "../images/mobile_hero_image.png";
import mobile_hero_image_2 from "../images/mobile_hero_image_2.png";

const LandingPageHero = () => {
  return (
    <>
      <section className={styles.LandingPageHero}>
        <div className={styles.left}>
          <h1>
            Welcome to the Home of <span>Champs</span>{" "}
          </h1>
          <div>
            <h4>
              Don’t miss the chance to train with the best. Game on Champions!
            </h4>
            {/* <h4>Game on Champions!</h4> */}
          </div>
          <div className={styles.hero_buttons}>
            <button className={styles.players_stats}>Players Stats</button>
            <button className={styles.sls_history}>SLS History</button>
          </div>
        </div>
        <img src={hero_image} alt="hero-image" className={styles.hero_image} />
        <img
          src={mobile_hero_image_2}
          alt="hero-image"
          className={styles.mobile_hero_image}
        />
        <div className={styles.mobile_hero_buttons}>
          <button className={styles.players_stats}>Players Stats</button>
          <button className={styles.sls_history}>SLS History</button>
        </div>
      </section>
    </>
  );
};

export default LandingPageHero;