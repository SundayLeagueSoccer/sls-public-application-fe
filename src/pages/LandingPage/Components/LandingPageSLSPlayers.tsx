import styles from "../styles/LandingPageSLSPlayers.module.scss";
import ForwardIconLink from "../../../assets/svgs/ForwardIconLink";
import PlayerInfoCard from "../../../Components/PlayerInfoCard";
import { Link } from "react-router-dom";
import { playersData } from "../assets/playersData";

const LandingPageSLSPlayers = () => {
  function getSecondWord(str: string) {
    const words = str.split(" ");
    return words[1];
  }

  return (
    <>
      <section className={styles.LandingPageSLSPlayers}>
        <div className={styles.textHeader}>
          <h2>Best of SLS Players</h2>
          <Link className={styles.secondaryTextBox} to={"/players"}>
            <h4>View All Players </h4>
            <ForwardIconLink fillColor="#0A4AAA" />
          </Link>
        </div>
        <div className={styles.playersCards}>
          {playersData.map((playersData) => {
            return (
              <PlayerInfoCard
                key={playersData.name}
                playerPosition={playersData.favoritePosition}
                playerText={playersData.playerQuote}
                playerName={getSecondWord(playersData.name)}
                playerSocials={playersData.socialMedia}
                interactive={false}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default LandingPageSLSPlayers;
