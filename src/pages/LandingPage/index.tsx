import styles from "./LandingPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { useEffect, useState } from "react";
import LandingPageHero from "./Components/LandingPageHero";
import LandingPageCountDown from "./Components/LandingPageCountDown";
import LandingPageFeatures from "./Components/LandingPageFeatures";
import LandingPageGallery from "./Components/LandingPageGallery";
import LandingPageHistory from "./Components/LandingPageHistory";
import LandingPageSLSPlayers from "./Components/LandingPageSLSPlayers";

const LandingPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LandingPage}>
          <LandingPageHero />
          <LandingPageCountDown />
          <LandingPageHistory />
          <LandingPageSLSPlayers />
          <LandingPageFeatures />
          <LandingPageGallery />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LandingPage;
