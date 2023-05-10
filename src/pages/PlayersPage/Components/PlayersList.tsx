import styles from "../styles/PlayersList.module.scss";
import { PlayerPageContext } from "../context/PlayersPageContext";
import { useContext, useEffect, useState } from "react";
import PlayerInfoCard from "../../../Components/PlayerInfoCard";
import axios from "../../../api/axios";
import Loader from "../Loader";

const PlayersList = () => {
  const { setAllPlayers, playersToDisplay, setPlayersToDisplay } =
    useContext(PlayerPageContext);

  // const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getAllPlayers = async () => {
      try {
        const response = await axios.get("/players", {
          signal: controller.signal,
        });
        setLoading(false);
        isMounted && setAllPlayers(response.data);
        isMounted && setPlayersToDisplay(response.data);
      } catch (error: any) {
        setLoading(false);
        if (error && error.message) {
          setError(error.message);
        } else {
          setError("An error occurred.");
        }
      }
    };

    getAllPlayers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className={styles.PlayersList}>
          {playersToDisplay.map((player) => {
            return (
              <PlayerInfoCard
                key={player.name}
                playerPosition={player.favoritePosition}
                playerText={player.playerQuote}
                playerName={player.name}
                playerSocials={player.socialMedia}
              />
            );
          })}
        </section>
      )}
    </>
  );
};

export default PlayersList;
