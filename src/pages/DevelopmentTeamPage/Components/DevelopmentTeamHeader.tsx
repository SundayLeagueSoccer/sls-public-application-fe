import styles from "../styles/DevelopmentTeamHeader.module.scss";
import closeIcon from "../images/close_icon.svg"
import { Link } from "react-router-dom";

const DevelopmentTeamHeader = () => {
  return (
    <>
      <section className={styles.DevelopmentTeamHeader}>
        <Link className={styles.close_button} to='/'><img src={closeIcon} alt="an icon"/></Link>
        <div className={styles.heading_text_box}>
        <p className={styles.subheading}>Dev Team</p>
        <h1 className={styles.heading}>The Dynamic Dev Team Driving Innovation and Excellence</h1>
        </div>
        <p className={styles.supporting_text}>Excellence through teamwork.</p>
      </section>
    </>
  );
};

export default DevelopmentTeamHeader;
