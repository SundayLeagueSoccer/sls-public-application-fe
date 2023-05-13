import styles from "../styles/AboutWhyUs.module.scss";

// Image
import whyUsImage from "../images/whyUs.png";
import whyUsCheckImage from "../images/check.png";
const AboutWhyUs = () => {
  return (
    <>
      <section className={styles.AboutWhyUs}>
        <div className={styles.AboutWhyUs_Mobile}>
          <h4>Why us?</h4>
          <h2>
            <span>SLS</span> Vision and Mission
          </h2>
          <p>
            SLS has got more than 50 active players and is committed to building
            a successful and sustainable organization that values teamwork,
            integrity, and excellence both on and off the field. Stay jiggy!!!
          </p>
        </div>
        <div className={styles.AboutWhyUs_Left}>
          <img src={whyUsImage} alt="" />
        </div>
        <div className={styles.AboutWhyUs_Right}>
          <div className={styles.AboutWhyUs_header}>
            <h4>Why us?</h4>
            <h2>
              <span>SLS</span> Vision and Mission
            </h2>
            <p>
              SLS has got more than 50 active players and is committed to
              building a successful and sustainable organization that values
              teamwork, integrity, and excellence both on and off the field.
              Stay jiggy!!!
            </p>
          </div>
          <div className={styles.About_mission_vision}>
            <div className={styles.inner_mission_vision}>
              <img src={whyUsCheckImage} alt="" />
              <div className={styles.mission_text}>
                <h6>Vision</h6>
                <p>
                  Our vision is to see SLS family & community, as well as our
                  guests; happy, healthy and flourishing, both physically &
                  socially, due to the influence of Sunday League Soccer #SLS.
                  We strive to enhance the quality of play while making sure to
                  have fun along the way!
                </p>
              </div>
            </div>
            <div className={styles.inner_mission_vision}>
              <img src={whyUsCheckImage} alt="" />
              <div className={styles.mission_text}>
                <h6>Mission</h6>
                <p>
                  Our mission is to manage a super fun football community for
                  young people to connect, stay active, and blow off some steam!
                  Let's kick-start the fun and build a community where everyone
                  can show off their skills and have a blast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutWhyUs;
