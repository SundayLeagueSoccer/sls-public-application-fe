import styles from "../styles/AboutHistory.module.scss";
import backgroundDesignTwo from "./../images/OurHistoryDesign.png";
import backgroundDesign from "./../images/OurHistoryDesign(2).png";
import OurHistoryPicture from "../images/ourHistoryPicture.png";
import OurHistoryPictureTwo from "../images/ourHistoryPicture(2).png";
import OurHistoryPictureThree from "../images/ourHistoryDesignSm(3).png";
import Plus from "../images/plus.svg";

const AboutHistory = () => {
  return (
    <>
      <section className={styles.AboutHistory}>
        <img className={styles.imageOne} src={backgroundDesignTwo} alt="" />
        <img className={styles.imageTwo} src={backgroundDesign} alt="" />
        <h2>Our History</h2>
          <h2>
            <span>SLS</span> WAS ESTABLISHED IN 2021
          </h2>
          
          <div className={styles.content_container}>
           
           <div className={styles.writeUp}>
           <div className={styles.yearsPlayed}>
             <div>
              <p>
                02{" "}
                <img
                  className={styles.plus_sign}
                  src={Plus}
                  alt="a plus icon"
                />
              </p>
              <p>years of gaming</p>
            </div>
            <p>
              spawned in 2021 in response to the effects & aftermath of the
              COVID-19 lockdown, where obesity, physical unfitness & lack of
              social interaction were on the rise.
            </p>
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

            <div className={styles.our_history_img}>
              <img src={OurHistoryPicture} alt="a group of footballers" />
            <img src={OurHistoryPictureTwo} alt="a football field"/>
            </div>

          </div>
            <img src={OurHistoryPictureThree} className={styles.our_history_sm} alt='our history design'/>
      </section>
    </>
  );
};

export default AboutHistory;
