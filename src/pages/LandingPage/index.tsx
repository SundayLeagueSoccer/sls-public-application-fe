import styles from "./LandingPage.module.scss";
import { Link } from "react-router-dom";
import dev_team_icon from "./images/dev_icon.png";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import LandingPageHero from "./Components/LandingPageHero";
import LandingPageCountDown from "./Components/LandingPageCountDown";
// import LandingPageFeatures from "./Components/LandingPageFeatures";
import LandingPageGallery from "./Components/LandingPageGallery";
import LandingPageHistory from "./Components/LandingPageHistory";
import LandingPageSLSPlayers from "./Components/LandingPageSLSPlayers";
import LandingPageAwards from "./Components/LandingPageAwards";
import LandingPageBecomeMember from "./Components/LandingPageBecomeMember";

const LandingPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LandingPage}>
          <LandingPageHero />
          <LandingPageCountDown />
          <LandingPageHistory />
          <LandingPageSLSPlayers />
          {/* <LandingPageFeatures /> */}
          <LandingPageAwards />
          <LandingPageBecomeMember />
          <LandingPageGallery />
          <Link
            to={"/development-team"}
            className={styles.dev_team_btn}
            tabIndex={0}
          >
            {/* <h4>View Development Team</h4> */}
            <img src={dev_team_icon} alt="deveveloper team icon" />
          </Link>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LandingPage;
