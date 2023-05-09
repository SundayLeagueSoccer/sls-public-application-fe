import styles from "../styles/AboutHistory.module.scss";
import backgroundDesignTwo from "./../images/OurHistoryDesign.png";
import backgroundDesign from "./../images/OurHistoryDesign(2).png";
import OurHistoryPicture from "../images/ourHistoryPicture.png";
import OurHistoryPictureTwo from "../images/ourHistoryPicture(2).png";
import OurHistoryPictureThree from "../images/ourHistoryDesignSm(3).png";
import Plus from "../images/plus.svg";
import CarouselImages from "../../LandingPage/Components/CarouselImages";

const AboutHistory = () => {
  return (
    <>
      <section className={styles.AboutHistory}>
          <div className={styles.AboutHistory_Left}></div>
          <div className={styles.AboutHistory_Right}>
            <CarouselImages/>
            <div className={styles.ImageUnderCarousel}>
              <img src={OurHistoryPictureTwo} alt="OurHistoryPicture" />
            </div>
          </div>
      </section>
    </>
  );
};

export default AboutHistory;
