import styles from "../styles/LandingPageHero.module.scss";
import hero_image_desktop from "../images/hero_image_desktop.svg";
import hero_image_mobile from "../images/hero_image_mobile.svg";
import { Link } from "react-router-dom";
import useApp from "../../../hooks/useApp";

const LandingPageHero = () => {
  const { darkMode } = useApp();

  const playerStats_btn_styles = {
    backgroundColor: darkMode ? "#001530" : "#fbfbfb",
  };
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
            <Link
              to={"/statistics"}
              style={playerStats_btn_styles}
              className={styles.players_stats}
            >
              Players Stats
            </Link>
            <Link to={"/about-us"} className={styles.sls_history}>
              SLS History
            </Link>
          </div>
        </div>
        <img
          src={hero_image_desktop}
          alt="A picture Illustration of an avatar kicking a ball"
          className={styles.hero_image}
        />
        <img
          src={hero_image_mobile}
          alt="A picture Illustration of an avatar kicking a ball"
          className={styles.mobile_hero_image}
        />
        <div className={styles.mobile_hero_buttons}>
          <Link
            to={"/statistics"}
            style={playerStats_btn_styles}
            className={styles.players_stats}
          >
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
