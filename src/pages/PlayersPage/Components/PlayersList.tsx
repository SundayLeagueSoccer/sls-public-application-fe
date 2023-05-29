import styles from "../styles/PlayersList.module.scss";
import { PlayerPageContext } from "../context/PlayersPageContext";
import { useContext, useEffect, useState } from "react";
import PlayerInfoCard from "../../../Components/PlayerInfoCard";
import axios from "../../../api/axios";

const PlayersList = () => {
  const {
    setAllPlayers,
    playersToDisplay,
    setPlayersToDisplay,
    setPaginationLimit,
    currentPage,
  } = useContext(PlayerPageContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  function getSecondWord(str: string) {
    const words = str.split(" ");
    const finalName = words.length < 2 ? str : words[1];
    return finalName.charAt(0).toUpperCase() + finalName.slice(1);
  }

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    setLoading(true);

    const getAllPlayers = async () => {
      try {
        const response = await axios.get("/players", {
          signal: controller.signal,
        });
        isMounted && setAllPlayers(response.data);
        isMounted && setPlayersToDisplay(response.data);
        const playersListLength: number = response.data.length;
        setPaginationLimit(Math.floor(playersListLength / 12) + 1);
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

    getAllPlayers();

    return () => {
      isMounted = false;
      isMounted && controller.abort();
    };
  }, []);

  if (playersToDisplay.length < 1) {
    return (
      <div className={styles.PlayersList}>
        <h2 className={styles.loading_text}>No Players match the criteria</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles.PlayersList}>
        <h2 className={styles.loading_text}>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.PlayersList}>
        <h2 className={styles.error_text}>ServerSide Error</h2>
      </div>
    );
  }

  return (
    <>
      <section className={styles.PlayersList}>
        {playersToDisplay
          .slice(currentPage * 12 - 12, currentPage * 12)
          .map((player) => {
            return (
              <PlayerInfoCard
                key={player.name}
                playerPosition={player.favoritePosition}
                playerText={player.playerQuote}
                playerName={getSecondWord(player.name)}
                playerSocials={player.socialMedia}
              />
            );
          })}
      </section>
    </>
  );
};

export default PlayersList;
