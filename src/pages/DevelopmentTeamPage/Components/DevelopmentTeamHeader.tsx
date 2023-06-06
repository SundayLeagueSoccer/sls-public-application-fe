import styles from "../styles/DevelopmentTeamHeader.module.scss";
import close_icon from "../images/close_icon.png";
import { Link } from "react-router-dom";

const DevelopmentTeamHeader = () => {
  return (
    <>
      <section className={styles.DevelopmentTeamHeader}>
        <div className={styles.heading_text_box}>
          <p
            className={styles.subheading}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Dev Team
          </p>
          <h1
            className={styles.heading}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            The Dynamic Dev Team Driving Innovation and Excellence
          </h1>
        </div>
        <p
          className={styles.supporting_text}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          Excellence through teamwork.
        </p>

        <Link
          to={"/home"}
          className={styles.closeButton}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img src={close_icon} alt="close icon" />
        </Link>
      </section>
    </>
  );
};

export default DevelopmentTeamHeader;
