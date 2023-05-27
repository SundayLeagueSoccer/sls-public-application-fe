import styles from "./LandingPage.module.scss";
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
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LandingPage;
