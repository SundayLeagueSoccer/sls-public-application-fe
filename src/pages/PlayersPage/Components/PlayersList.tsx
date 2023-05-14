import styles from "../styles/PlayersList.module.scss";
import { PlayerPageContext } from "../context/PlayersPageContext";
import { useContext, useEffect, useState } from "react";
import PlayerInfoCard from "../../../Components/PlayerInfoCard";
import axios from "../../../api/axios";
import Loader from "../Loader";
import { dummyPlayers } from "../dummyPlayers";
// import axios from "axios";
import Notification from "../../../utils/Notifications";

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
  const [openNotification, setOpenNotification] = useState(false);

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
        setOpenNotification(false);
        isMounted && setAllPlayers(response.data);
        isMounted && setPlayersToDisplay(response.data);
        const playersListLength: number = response.data.length;
        setPaginationLimit(Math.floor(playersListLength / 12) + 1);
      } catch (error: any) {
        setLoading(false);
        setSuccess(false);
        setOpenNotification(true);
        if (error && error.message) {
          setError(error.message);
        } else {
          setError("An error occurred.");
        }
        console.log(error);
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
      {!loading && !success ? (
        <>
          <Notification
            setNotification={() => setOpenNotification}
            notificationHeader="Server Error."
            notificationBody="Our servers are not working right now. Try again later."
            selfClosing={false}
          />
          <Loader />
        </>
      ) : (
        <div></div>
      )}
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
