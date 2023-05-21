import styles from "../styles/LandingPageFeatures.module.scss";
import OrangeBoxIcon from '../images/orange_boxes_svg.svg'
import GreenChatIcon from '../images/green_chatLogo_svg.svg'
import PlayerImg from '../images/player_of_the_month.png'

type TopPlayerItemCardProp = {
  img: string,
  mainText: string,  
  secondaryText: string,  
}

const TopPlayerItemCard = ({
  img, mainText, secondaryText
}: TopPlayerItemCardProp) => {
  return(
    <div className={styles.top_player_item_card}>
      <img src={img} alt='an icon'/>
      <div>
        <p className={styles.mainText}>{mainText}</p>
        <p className={styles.secondaryText}>{secondaryText}</p>
      </div>
    </div>
  )
}

const LandingPageFeatures = () => {

  const boxItem = [
    {
      img: OrangeBoxIcon,
      mainText: "Congratulations!!!",
      secondaryText:
        "Congratulations to our player of the month for their outstanding performances and contributions!",
    },
    {
      img: GreenChatIcon,
      mainText: "Quote from Player",
      secondaryText:
        "Grateful for the opportunity to play the game I love at such a high level. Thanks to the training ground, I can keep improving!",
    },
  ];

  return (
    <>
      <section className={styles.LandingPageFeatures}>
        <div className={styles.top_player}>
          <div className={styles.top_playerImg_container}>
          <img className={styles.top_playerImg} src={PlayerImg} alt="image of a player" />
          </div>

          <div className={styles.text_container}>
          <h4 className={styles.top_player_heading}>Top Player of the Month</h4>
              <p className={styles.secondary_text}>
                This month, we have been fortunate to have a player who has been
                delivering nothing but excellence on the field.
              </p>

            <div className={styles.item_box_container}>
             {boxItem.map((item) => (
              <TopPlayerItemCard
              img={item.img}
              mainText={item.mainText}
              secondaryText={item.secondaryText}/>
             ))}
            </div>
          </div>
        </div>
        <div className={styles.membership}></div>
      </section>
    </>
  );
};

export default LandingPageFeatures;
