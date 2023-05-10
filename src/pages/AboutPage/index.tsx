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
          {/* Henry I already applied the background for these 3 sections */}
          <div className={styles.AboutPage_Features}>
            <AboutHistory />
            <AboutWhyUs />
            <AboutTestimonial />
          </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default AboutPage;
