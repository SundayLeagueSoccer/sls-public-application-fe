import styles from "./StatisticsPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import StatisticsHeader from "./Components/StatisticsHeader";
import StatisticsCollection from "./Components/StatisticsCollection";
import StatisticsPageContext from "./context/StatisticsPageContext";

const StatisticsPage = () => {
  return (
    <>
      <StatisticsPageContext>
        <AnimatedFadeInPage>
          <main className={styles.StatisticsPage}>
            <StatisticsHeader />
            <StatisticsCollection />
          </main>
        </AnimatedFadeInPage>
      </StatisticsPageContext>
    </>
  );
};

export default StatisticsPage;
