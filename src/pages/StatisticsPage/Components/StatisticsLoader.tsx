import useApp from "../../../hooks/useApp";
import styles from "../styles/StatisticsLoader.module.scss";

const StatisticsLoader = () => {
  const { darkMode } = useApp();

  const single_performer_details_style = {
    background: darkMode ? "#34383c" : "#e7e7e7",
  };

  return (
    <>
      <section className={styles.StatisticsLoader}>
        {/* /Table Top  */}
        <div className={styles.Top_Performer}></div>

        {/* Other Performers */}
        <div className={styles.Other_Performers}>
          <div
            className={styles.single_performer_details}
            style={single_performer_details_style}
          ></div>
          <div
            className={styles.single_performer_details}
            style={single_performer_details_style}
          ></div>
          <div
            className={styles.single_performer_details}
            style={single_performer_details_style}
          ></div>
        </div>
      </section>
    </>
  );
};

export default StatisticsLoader;
