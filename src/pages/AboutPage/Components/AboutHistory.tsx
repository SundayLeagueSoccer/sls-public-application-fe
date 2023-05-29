import styles from "../styles/AboutHistory.module.scss";
import OurHistoryPictureTwo from "../images/ourHistoryPicture(2).png";
import CarouselImages from "../../LandingPage/Components/CarouselImages";

const AboutHistory = () => {
  return (
    <>
      <section className={styles.AboutHistory}>
        <div className={styles.Mobile_Header}>
          <h3>Our History</h3>
          <h1>
            <span>SLS</span> WAS ESTABLISHED IN 2021
          </h1>
        </div>
        <div className={styles.AboutHistory_Content}>
          <div className={styles.AboutHistory_Left}>
            <div className={styles.Left_Header}>
              <h3>Our History</h3>
              <h1>
                <span>SLS</span> WAS ESTABLISHED IN 2021
              </h1>
            </div>
            <div className={styles.Left_Capital}>
              <div className={styles.Left_Capital_Left}>
                <h1>
                  02<span>+</span>
                </h1>
                <p>years of gaming </p>
              </div>
              <div className={styles.Left_Capital_Right}>
                <span>
                  spawned in 2021 in response to the effects & aftermath of the
                  COVID-19 lockdown, where obesity, physical unfitness & lack of
                  social interaction were on the rise.
                </span>
              </div>
            </div>
            <p>
              We all agreed that we needed to break out of our boring routines
              and kick-start some excitement by playing football together on
              Sundays. It's the one day of the week when we can forget about our
              work and other obligations and just have a blast. Not only does it
              keep us in shape, but it also gives us the chance to expand our
              social circles. It's the highlight of our week, and we wouldn't
              miss it for the world!
            </p>
          </div>
          <div className={styles.AboutHistory_Right}>
            <CarouselImages />
            <div className={styles.ImageUnderCarousel}>
              <img src={OurHistoryPictureTwo} alt="OurHistoryPicture" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHistory;
