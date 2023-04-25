import styles from "./LandingPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { useEffect, useState } from "react";
import LandingPageHero from "./Components/LandingPageHero";

const LandingPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LandingPage}>
          <LandingPageHero />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LandingPage;
