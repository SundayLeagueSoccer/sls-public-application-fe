import styles from "./PlayerInfoCard.module.scss";
import dummyImage from "./images/dummy_Avatar.png";
import red_ornament from "./images/red_ornament.png";
import cyan_ornament from "./images/cyan_ornament.png";
import green_ornament from "./images/green_ornament.png";
import orange_ornament from "./images/orange_ornament.png";
import twitter_icon from "./images/white_twitter_icon.png";
import facebook_icon from "./images/white_twitter_icon.png";
import instagram_icon from "./images/white_twitter_icon.png";
import { Link } from "react-router-dom";
import ForwardIconLink from "./svgs/ForwardIconLink";

type social = {
  facebook?: string;
  instagram?: string;
  twitter?: string;
};

type PlayerInfoCardProp = {
  playerPosition: "Midfielder" | "Defender" | "Goal Keeper" | "Striker";
  playerText: string;
  playerName: string;
  playerSocials?: social;
  playerImage?: string;
};

const PlayerInfoCard = ({
  playerPosition,
  playerText,
  playerName,
  playerSocials,
  playerImage,
}: PlayerInfoCardProp) => {
  let triangleColor;
  let ornamentImage;
  const getBorderColor = (_playerPosition: string) => {
    if (_playerPosition === "Midfielder") {
      triangleColor = "#fd8a3c";
      ornamentImage = orange_ornament;
    }
    if (_playerPosition === "Defender") {
      triangleColor = "#f93b3d";
      ornamentImage = red_ornament;
    }
    if (_playerPosition === "Goal Keeper") {
      triangleColor = "#3aac8a";
      ornamentImage = green_ornament;
    }
    if (_playerPosition === "Striker") {
      triangleColor = "#01b3ce";
      ornamentImage = cyan_ornament;
    }
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
            <div className={styles.PlayerCard_details_info}>
              <h4>{playerPosition}</h4>
              <p>{playerText}</p>
            </div>
            <div className={styles.PlayerCard_details_bottom}>
              <div className={styles.PlayerCard_details_socials}>
                {playerSocials?.facebook ? (
                  <Link
                    to={playerSocials?.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={playerSocials?.facebook}
                    className={styles.socialMedia_link}
                  >
                    <img src={facebook_icon} alt={`facebook Button`} />
                  </Link>
                ) : (
                  <></>
                )}
                {playerSocials?.twitter ? (
                  <Link
                    to={playerSocials?.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={playerSocials?.twitter}
                    className={styles.socialMedia_link}
                  >
                    <img src={twitter_icon} alt={`twitter Button`} />
                  </Link>
                ) : (
                  <></>
                )}
                {playerSocials?.instagram ? (
                  <Link
                    to={playerSocials?.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={playerSocials?.instagram}
                    className={styles.socialMedia_link}
                  >
                    <img src={instagram_icon} alt={`instagram Button`} />
                  </Link>
                ) : (
                  <></>
                )}
              </div>
              <button className={styles.PlayerCard_details_popUp}>
                <ForwardIconLink fillColor={triangleColor} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.playerCard_image}>
          <img
            src={playerImage ? playerImage : dummyImage}
            alt="A football player pose"
          />
        </div>
        <div className={styles.playerCard_ornament}>
          <img src={ornamentImage} alt="An ornament representation" />
        </div>
        <div className={styles.playerCard_triangle} style={TriangleStyle}></div>
      </div>
    </>
  );
};

export default PlayerInfoCard;
