import styles from "../styles/PlayersList.module.scss";
import { PlayerPageContext } from "../context/PlayersPageContext";
import { useContext, useEffect, useState } from "react";
import PlayerInfoCard from "../../../Components/PlayerInfoCard";
import axios from "../../../api/axios";
import Loader from "../Loader";
import { dummyPlayers } from "../dummyPlayers";
// import axios from "axios";

const PlayersList = () => {
  const {
    setAllPlayers,
    playersToDisplay,
    setPlayersToDisplay,
    setPaginationLimit,
    currentPage,
  } = useContext(PlayerPageContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function getSecondWord(str: string) {
    const words = str.split(" ");
    return words[1];
  }

  // useEffect(() => {
  //   const dummyUseEffect = () => {
  //     setAllPlayers(dummyPlayers);
  //     setLoading(false);
  //     setSuccess(true);
  //     setError("");
  //     setPlayersToDisplay(dummyPlayers);
  //   };

  //   dummyUseEffect();

  //   const handlePageList = () => {
  //     const totalPlayers = playersToDisplay.length;
  //     setPaginationLimit(Math.floor(totalPlayers / 12) + 1);
  //   };

  //   handlePageList();
  // });

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getAllPlayers = async () => {
      try {
        const response = await axios.get("/players", {
          signal: controller.signal,
        });
        setLoading(false);
        setSuccess(true);
        setError("");
        isMounted && setAllPlayers(response.data);
        isMounted && setPlayersToDisplay(response.data);
        const playersListLength: number = response.data.length;
        setPaginationLimit(Math.floor(playersListLength / 12) + 1);
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

    getAllPlayers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  // useEffect(() => {
  //   const getAllPlayers = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://sunday-soccer-api.up.railway.app/players"
  //       );
  //       console.log(response.data);
  //     } catch (error: any) {
  //       console.log(error);
  //     }
  //   };

  //   getAllPlayers();
  // }, []);

  return (
    <>
      {!loading && !success ? <Loader /> : <div></div>}
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default PlayersList;
