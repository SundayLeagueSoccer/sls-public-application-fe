import styles from "./AboutPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

//components
import AboutHero from "./Components/AboutHero";
import AboutHistory from "./Components/AboutHistory";
import AboutMetrics from "./Components/AboutMetrics";
import AboutWhyUs from "./Components/AboutWhyUs";
import AboutTestimonial from "./Components/AboutTestimonial";

const AboutPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.AboutPage}>
          <AboutHero />
          <AboutMetrics />
          <AboutHistory />
          <AboutWhyUs />
          <AboutTestimonial />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default AboutPage;
