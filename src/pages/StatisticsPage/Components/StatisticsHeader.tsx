import styles from "../styles/StatisticsHeader.module.scss";
import CustomDropdown from "./CustomDropdown";
import { StatisticsPageContext } from "../context/StatisticsPageContext";
import { useContext, useEffect } from "react";

const StatisticsHeader = () => {
  const { setIsOverview, setDropDownChoice, isOverview, dropDownChoice } =
    useContext(StatisticsPageContext);
  const dummy = ["2023A", "2023B", "2023C", "2023D"];

  return (
    <>
      <section className={styles.StatisticsHeader}>
        <h1>SLS Stats {dropDownChoice}</h1>
        <div className={styles.statistics_inputs}>
          <div className={styles.statistics_buttons}>
            <button
              onClick={() => setIsOverview(true)}
              className={isOverview ? styles.activeTab : ""}
            >
              Overview
            </button>
            <button
              onClick={() => setIsOverview(false)}
              className={!isOverview ? styles.activeTab : ""}
            >
              Disciplinary Stats
            </button>
          </div>
          <div className={styles.dropdown_container}>
            <CustomDropdown
              defaultSelection={dummy[0]}
              possibleOptions={dummy}
              customOnChange={setDropDownChoice}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default StatisticsHeader;
