import styles from "../styles/StatisticsCollections.module.scss";
import StatisticsTable from "./StatisticsTable";
import { StatisticsPageContext } from "../context/StatisticsPageContext";
import { useContext, useEffect, useState } from "react";
import axios from "../../../api/axios";
import { statsQueryType } from "../../../types/SeasonStatsType";

const StatisticsCollection = () => {
  const { isOverview, dropDownChoice, setSeasonStats, seasonStats } =
    useContext(StatisticsPageContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  const getStatTitle = (title: string) => {
    let statsTitle;

    if (title === "goals") {
      statsTitle = "Goals";
    } else if (title === "assists") {
      statsTitle = "Assists";
    } else if (title === "cleanSheets") {
      statsTitle = "Clean Sheets (only Defenders)";
    } else if (title === "yellowCards") {
      statsTitle = "Yellow Cards";
    } else {
      statsTitle = "Red Cards";
    }

    return statsTitle;
  };

  const sortingLogic = (statsQuery: statsQueryType) => {
    if (seasonStats.length === 0)
      return {
        statsTitle: getStatTitle(statsQuery),
        topPlayerDetails: {
          fullName: "",
          alias: "",
          statLine: 0,
          imageURL: "",
        },
        otherPlayersDetails: [{ fullName: "", alias: "", statLine: 0 }],
      };

    const sortedArray = seasonStats.sort((a, b) => {
      const aItem = a.stats[0][statsQuery];
      const bItem = b.stats[0][statsQuery];
      if (aItem < bItem) {
        return 1;
      }
      if (aItem > bItem) {
        return -1;
      }
      return 0;
    });

    const topPlayerDetails = {
      fullName: sortedArray[0].name,
      alias: sortedArray[0].alias,
      statLine: sortedArray[0].stats[0][statsQuery],
      imageURL: sortedArray[0].image.url,
    };

    const otherPlayersDetails: {
      fullName: string;
      alias: string;
      statLine: number;
    }[] = [];
    sortedArray.forEach((item, index) => {
      if (index !== 0 && item.stats[0][statsQuery] !== 0) {
        const singlePerformer = {
          fullName: item.name,
          alias: item.alias,
          statLine: item.stats[0][statsQuery],
        };
        otherPlayersDetails.push(singlePerformer);
      }
    });

    return {
      statsTitle: getStatTitle(statsQuery),
      topPlayerDetails,
      otherPlayersDetails,
    };
  };

  const getCurrentSeason = () => {
    const currentTime = new Date();
    const year = currentTime.getFullYear();
    const month = currentTime.getMonth();
    const seasonPart = month < 6 ? `A` : `B`;
    return `${year}${seasonPart}`;
  };

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    setLoading(true);

    const getAllSeasonStats = async () => {
      try {
        const response = await axios.get(`/statistics/${dropDownChoice}`, {
          signal: controller.signal,
        });
        isMounted && setSeasonStats(response.data);
      } catch (error: any) {
        if (error && error.message) {
          setError(error.message);
        } else {
          setError("An error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };
    getAllSeasonStats();

    return () => {
      isMounted = false;
      isMounted && controller.abort();
    };
  }, [dropDownChoice]);

  if (dropDownChoice > getCurrentSeason()) {
    return (
      <div className={styles.Stats}>
        <h2 className={styles.loading_text}>
          No Stats available. Season incoming...
        </h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles.Stats}>
        <h2 className={styles.loading_text}>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.Stats}>
        <h2 className={styles.error_text}>ServerSide Error</h2>
      </div>
    );
  }

  return (
    <>
      <section className={styles.Stats}>
        {isOverview ? (
          <>
            <div className={styles.container}>
              <StatisticsTable statsData={sortingLogic("goals")} />
            </div>
            <div className={styles.container}>
              <StatisticsTable statsData={sortingLogic("assists")} />
            </div>
            <div className={styles.container}>
              <StatisticsTable statsData={sortingLogic("cleanSheets")} />
            </div>
          </>
        ) : (
          <>
            <div className={styles.container}>
              <StatisticsTable statsData={sortingLogic("yellowCards")} />
            </div>
            <div className={styles.container}>
              <StatisticsTable statsData={sortingLogic("redCards")} />
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default StatisticsCollection;
