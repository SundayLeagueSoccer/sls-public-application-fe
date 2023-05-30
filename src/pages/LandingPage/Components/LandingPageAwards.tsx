import { NavLink } from "react-router-dom";
import styles from "../styles/LandingPageAwards.module.scss";
import firstIcon from "../images/team_icon.png";
import secondIcon from "../images/player icon.png";
import AwardImage from "../images/landing_page_award_image.png";
<<<<<<< HEAD
=======
import useApp from "../../../hooks/useApp";
>>>>>>> f15381f371ee10738faa5f762b7474d04e55afdf

type cardItemProp = {
  icon: string;
  mainText: string;
  secondaryText: string;
};

// CARD ITEM COMPONENT
const CardItem = ({ icon, mainText, secondaryText }: cardItemProp) => {
<<<<<<< HEAD
  return (
    <div className={styles.cardItem}>
=======
  const { darkMode } = useApp();
  const cardItemStyles = {
    boxShadow: darkMode
      ? "0px 2px 4px rgba(255, 255, 255, 0.1)"
      : " 0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className={styles.cardItem} style={cardItemStyles}>
>>>>>>> f15381f371ee10738faa5f762b7474d04e55afdf
      <img src={icon} alt="sls team of the season icon" />
      <div className={styles.cardItem_textContent}>
        <h6>{mainText}</h6>
        <p>{secondaryText}</p>
      </div>
    </div>
  );
};

const LandingPageAwards = () => {
  return (
    <>
      <section className={styles.LandingPageAwards}>
<<<<<<< HEAD

=======
>>>>>>> f15381f371ee10738faa5f762b7474d04e55afdf
        {/* LEFT SIDE DESKTOP IMAGE */}
        <div className={styles.image_container}>
          <img src={AwardImage} alt="sls team of the season" />
        </div>
<<<<<<< HEAD
        
=======

>>>>>>> f15381f371ee10738faa5f762b7474d04e55afdf
        {/* RIGHT SIDE TEXT CONTENT */}
        <div className={styles.text_container}>
          <div>
            <h4>Seasonal and Monthly Awards</h4>
            <p>
              {" "}
              Play for fun, Reward for passion. There are several season and
              monthly awards given out to members with excellent performances.
            </p>
          </div>
<<<<<<< HEAD
         
         {/* MOBILE IMAGE */}
=======

          {/* MOBILE IMAGE */}
>>>>>>> f15381f371ee10738faa5f762b7474d04e55afdf
          <img
            className={styles.mobile_image}
            src={AwardImage}
            alt="sls team of the season"
          />
<<<<<<< HEAD
          
=======

>>>>>>> f15381f371ee10738faa5f762b7474d04e55afdf
          {/* CARD ITEMS */}
          <div className={styles.card_item_container}>
            <CardItem
              icon={firstIcon}
              mainText="Team of the Season"
              secondaryText="Up your game and play at an exceptional level to feature in
                  our team of the season."
            />

            <CardItem
              icon={secondIcon}
              mainText="Player of the Month"
              secondaryText=" Only the best deserve the best. Award reserved for the top
                  performing player of the month."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPageAwards;
