import styles from "../styles/StatisticsHeader.module.scss";
import CustomDropdown from "./CustomDropdown";
import { StatisticsPageContext } from "../context/StatisticsPageContext";
import { useContext, useEffect } from "react";

const StatisticsHeader = () => {
  const { setIsOverview, setDropDownChoice, isOverview, dropDownChoice } =
    useContext(StatisticsPageContext);
  const dropDownOptions = ["2023B", "2024A", "2024B", "2025A", "2025B"];

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
              defaultSelection={dropDownChoice}
              possibleOptions={dropDownOptions}
              customOnChange={setDropDownChoice}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default StatisticsHeader;
