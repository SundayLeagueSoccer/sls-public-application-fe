import styles from "../styles/StatisticsTable.module.scss";
import useApp from "../../../hooks/useApp";
import { useState } from "react";

const StatisticsTable = () => {
  const { darkMode } = useApp();
  const [numberShown, setNumberShown] = useState(5);
  const [showmore, setShowmore] = useState(false);

  const single_performer_details_style = {
    background: darkMode ? "#34383c" : "#e7e7e7",
  };
  const show_more_button_style = {
    background: darkMode ? "#34383c" : "#e7e7e7",
    color: darkMode ? "#8f90a6" : "#001530",
  };

  return (
    <>
      <section className={styles.StatisticsTable}>
        {/* /Table Top  */}
        <div className={styles.Top_Performer}>
          <h4>Goals</h4>
          <div className={styles.Top_Performer_details}>
            <p>1</p>
            <h4>
              Sanni Yusuf<span>{` (Buch)`}</span>
            </h4>
            <h2>20</h2>
          </div>
        </div>

        {/* Other Performers */}
        <div className={styles.Other_Performers}>
          <div
            className={styles.single_performer_details}
            style={single_performer_details_style}
          >
            <p>1</p>
            <h4>
              Esedere Oghenetega<span>{` (arcteggzz)`}</span>
            </h4>
            <h4 className={styles.single_performer_value}>20</h4>
          </div>
          <div
            className={styles.single_performer_details}
            style={single_performer_details_style}
          >
            <p>1</p>
            <h4>
              Esedere Oghenetega<span>{` (arcteggzz)`}</span>
            </h4>
            <h4 className={styles.single_performer_value}>20</h4>
          </div>
          <button
            className={styles.showMore}
            style={show_more_button_style}
            onClick={() => setShowmore(!showmore)}
          >
            {showmore ? `Collapse List` : `Show full list`}
          </button>
        </div>
      </section>
    </>
  );
};

export default StatisticsTable;
