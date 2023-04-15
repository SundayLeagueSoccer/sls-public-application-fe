import styles from "./AwardsPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

const AwardsPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.AwardsPage}>
          <h1>AwardPage</h1>
          <p>Awards</p>
          <p>Awards333</p>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default AwardsPage;
