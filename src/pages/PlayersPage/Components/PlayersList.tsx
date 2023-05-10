import styles from "../styles/PlayersList.module.scss";
import { PlayerPageContext } from "../context/PlayersPageContext";
import { useContext } from "react";
import PlayerInfoCard from "../../../Components/PlayerInfoCard";

const PlayersList = () => {
  const { selectedPlayersTab } = useContext(PlayerPageContext);
  const components = [];

  for (let i = 0; i < 20; i++) {
    components.push(
      <PlayerInfoCard
        key={i}
        playerPosition={i % 2 === 0 ? "Midfielder" : "Defender"}
        playerText={"I live for this game called football."}
        playerName={"Iyanu"}
        playerSocials={[{ facebook: "google.com" }]}
        playerLink={"ppp"}
      />
    );
  }

  return (
    <>
      <section className={styles.PlayersList}>
        {components.map((component) => component)}
      </section>
    </>
  );
};

export default PlayersList;
