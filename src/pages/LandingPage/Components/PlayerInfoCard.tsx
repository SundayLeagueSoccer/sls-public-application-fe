import styles from "../styles/PlayerInfoCard.module.scss";
import dummyImage from "../images/test.png";

type social = {
  facebook: string;
  instagram: string;
  twitter: string;
};

type PlayerInfoCardProp = {
  playerPosition: string;
  playerText: string;
  playerName: string;
  playerSocials?: social[];
  playerLink?: string;
  playerImage?: string;
};

const PlayerInfoCard = ({
  playerPosition,
  playerText,
  playerName,
  playerSocials,
  playerLink,
  playerImage,
}: PlayerInfoCardProp) => {
  let triangleColor;
  const getBorderColor = (_playerPosition: string) => {
    if (_playerPosition === "Midfielder") triangleColor = "#fd8a3c";
    if (_playerPosition === "Defender") triangleColor = "#f93b3d";
    if (_playerPosition === "Goal Keeper") triangleColor = "#3aac8a";
    if (_playerPosition === "Striker") triangleColor = "#01b3ce";
  };
  getBorderColor(playerPosition);

  const TriangleStyle = {
    backgroundColor: triangleColor,
  };

  return (
    <>
      <div className={styles.PlayerInfoCard_container}>
        <div className={styles.PlayerCard_details_container}>
          <div className={styles.PlayerCard_details}>
            <h3>{playerName}</h3>
            <h4>{playerPosition}</h4>
            <p>{playerText}</p>
            <div className={styles.PlayerCard_details_bottom}>
              <div className={styles.PlayerCard_details_links}>
                <img src="" alt="" />
              </div>
              <div className={styles.PlayerCard_details_button}></div>
            </div>
          </div>
        </div>

        <div className={styles.playerCard_image}>
          <img
            src={playerImage ? playerImage : dummyImage}
            alt="A football player pose"
          />
        </div>
        <div className={styles.playerCard_triangle} style={TriangleStyle}></div>
      </div>
    </>
  );
};

export default PlayerInfoCard;
