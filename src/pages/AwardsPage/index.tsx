import styles from "./AwardsPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import ComingSoonLayout from "../../utils/ComingSoonLayout";

const AwardsPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.AwardsPage}>
          <ComingSoonLayout headerText="We are tirelessly working on this feature." />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default AwardsPage;
