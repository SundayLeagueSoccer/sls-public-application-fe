import styles from "../styles/StatisticsCollection.module.scss";
import StatisticsTable from "./StatisticsTable";
import { StatisticsPageContext } from "../context/StatisticsPageContext";
import { useContext, useEffect, useState } from "react";
import axios from "../../../api/axios";

const StatisticsCollection = () => {
  const { isOverview, dropDownChoice, setSeasonStats, seasonStats } =
    useContext(StatisticsPageContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getAllSeasonStats = async () => {
      try {
        const response = await axios.get(`/statistics/${dropDownChoice}`, {
          signal: controller.signal,
        });
        setLoading(false);
        setSuccess(true);
        setError("");
        console.log(response.data);
        isMounted && setSeasonStats(response.data);
      } catch (error: any) {
        setLoading(false);
        setSuccess(false);
        if (error && error.message) {
          setError(error.message);
        } else {
          setError("An error occurred.");
        }
      }
    };

    getAllSeasonStats();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [dropDownChoice]);

  return (
    <>
      <section className={styles.Stats}>
        {isOverview ? (
          <>
            <div className={styles.container}>
              <StatisticsTable />
            </div>
            <div className={styles.container}>
              <StatisticsTable />
            </div>
            <div className={styles.container}>
              <StatisticsTable />
            </div>
          </>
        ) : (
          <>
            <div className={styles.container}>
              <StatisticsTable />
            </div>
            <div className={styles.container}>
              <StatisticsTable />
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default StatisticsCollection;
