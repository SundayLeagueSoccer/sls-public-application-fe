import styles from "./DevelopmentTeamPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import DevelopmentTeamHeader from "./Components/DevelopmentTeamHeader";
import SingleTeamMember from "./Components/SingleTeamMember";

const DevelopmentTeamPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.DevelopmentTeamPage}>
          <DevelopmentTeamHeader />
          <section>
            <SingleTeamMember />
          </section>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default DevelopmentTeamPage;
