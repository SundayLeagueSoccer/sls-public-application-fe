import styles from "./PlayersPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";

const PlayersPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.PlayersPage}>PlayersPage</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default PlayersPage;
