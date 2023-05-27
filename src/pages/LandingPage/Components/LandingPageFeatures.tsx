import styles from "../styles/LandingPageFeatures.module.scss";
import OrangeBoxIcon from '../images/orange_boxes_svg.svg';
import GreenChatIcon from '../images/green_chatLogo_svg.svg';
import PlayerImg from '../images/player_of_the_month.png';
import BlueJerseryPlayer from '../images/membership_img.png'

type ItemCardProp = {
  img: string,
  mainText: string,  
  secondaryText: string,
}

const ItemCard = ({
  img, mainText, secondaryText, 
}: ItemCardProp) => {
  return(
    <div key={mainText} className={styles.item_card}>
      <img src={img} alt='an icon'/>
      <div>
        <p className={styles.mainText}>{mainText}</p>
        <p className={styles.secondaryText}>{secondaryText}</p>
      </div>
    </div>
  )
}

const LandingPageFeatures = () => {

  const TopPlayerBoxItem = [
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

  const MembershipBoxItem = [
    {    
      img: OrangeBoxIcon,
      mainText: "Training",
      secondaryText:
        "Get a preliminary invitation from any of our existing members. Come play with us for a few weeks.",
    },
    {
      img: GreenChatIcon,
      mainText: "Waiting Period",
      secondaryText:
        "You have to play 3 months with us before you become eligible for membership. It’s all fun, so it shouldn’t be too difficult.",
    },
  ];

  return (
    <>
      <section className={styles.LandingPageFeatures}>
        <div className={styles.top_player}>
        <div className={styles.text_container_sm_screen}>
          <h4 className={styles.section_heading}>Top Player of the Month</h4>
              <p className={styles.section_secondary_text}>
                This month, we have been fortunate to have a player who has been
                delivering nothing but excellence on the field.
              </p>
          </div>

          <div className={styles.top_playerImg_container}>
          <img className={styles.top_playerImg} src={PlayerImg} alt="image of a player" />
          </div>

          <div className={styles.top_player_text_container}>
          <div className={styles.text_container_lg_screen}>
          <h4 className={styles.section_heading}>Top Player of the Month</h4>
              <p className={styles.section_secondary_text}>
                This month, we have been fortunate to have a player who has been
                delivering nothing but excellence on the field.
              </p>
          </div>

            <div className={styles.item_box_container}>
             {TopPlayerBoxItem.map((item) => (
              <ItemCard
              img={item.img}
              mainText={item.mainText}
              secondaryText={item.secondaryText}/>
             ))}
            </div>
          </div>
        </div>
        <div className={styles.membership}>
        <div className={styles.text_container_sm_screen}>
        <h4 className={styles.section_heading}>How to become a member</h4>
            <p className={styles.section_secondary_text}>Interested in training with us and improving your skills?  Train with lots of folks.</p>
          </div>

          <div className={styles.membership_text_container}>
            <div className={styles.text_container_lg_screen}>
            <h4 className={styles.section_heading}>How to become a member</h4>
            <p className={styles.section_secondary_text}>Interested in training with us and improving your skills?  Train with lots of folks.</p>
            </div>

            <div className={styles.item_box_container}>
              {MembershipBoxItem.map((item) => (
              <ItemCard
              key={item.mainText}
              img={item.img}
              mainText={item.mainText}
              secondaryText={item.secondaryText}/>
             ))}
            </div>
          </div>
          <div className={styles.membership_image_container}>
           <img src={BlueJerseryPlayer} alt="a footballer in blue jersey."/>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPageFeatures;
