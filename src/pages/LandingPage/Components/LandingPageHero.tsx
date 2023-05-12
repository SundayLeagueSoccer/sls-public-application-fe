import styles from "../styles/LandingPageHero.module.scss";
import hero_image from "../images/hero_image.png";
import mobile_hero_image from "../images/mobile_hero_image.png";
import mobile_hero_image_2 from "../images/mobile_hero_image_2.png";
import hero_ball_test from "../images/hero ball player test.svg";
import high_res_hero from "../images/hgih res ball kicker.png";
import { Link } from "react-router-dom";

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
            <Link to={"/statistics"} className={styles.players_stats}>
              Players Stats
            </Link>
            <Link to={"/about-us"} className={styles.sls_history}>
              SLS History
            </Link>
          </div>
        </div>
        <img
          // src={hero_image}
          // src={high_res_hero}
          src={hero_ball_test}
          alt="A picture Illustration of an avatar kicking a ball"
          className={styles.hero_image}
        />
        <img
          src={mobile_hero_image_2}
          alt="A picture Illustration of an avatar kicking a ball"
          className={styles.mobile_hero_image}
        />
        <div className={styles.mobile_hero_buttons}>
          <Link to={"/statistics"} className={styles.players_stats}>
            Players Stats
          </Link>
          <Link to={"/about-us"} className={styles.sls_history}>
            SLS History
          </Link>
        </div>
      </section>
    </>
  );
};

export default LandingPageHero;
