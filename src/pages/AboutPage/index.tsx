import styles from "./AboutPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

const AboutPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.AboutPage}>AboutPage</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default AboutPage;
