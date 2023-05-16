import { Link } from "react-router-dom";
import styles from "../styles/LandingPageHistory.module.scss";
import CarouselImages from "./CarouselImages";

const LandingPageHistory = () => {
  return (
    <>
      <section className={styles.LandingPageHistory}>
        <div className={styles.left}>
          <div className={styles.left_top}>
            <h5>our History</h5>
            <h4>
              <span>SLS</span> WAS ESTABLISHED IN 2021
            </h4>
          </div>
          <div className={styles.left_bottom}>
            <div className={styles.left_bottom_info}>
              <div className={styles.left_bottom_info_text}>
                <h4>
                  02<span>+</span>
                </h4>
                <h6>years of gaming </h6>
              </div>
              <h6>
                spawned in 2021 in response to the effects & aftermath of the
                COVID-19 lockdown, where obesity, physical unfitness & lack of
                social interaction were on the rise.
              </h6>
            </div>
            <Link to={"/about-us"} className={styles.read_more_btn_desktop}>
              Read More
            </Link>
          </div>
        </div>
        {/* <CarouselImages /> */}
        <div className={styles.Carousel_Parent_Container}>
          <CarouselImages />
        </div>
        <div className={styles.mobile_left_bottom}>
          <div className={styles.mobile_left_bottom_info}>
            <div className={styles.mobile_left_bottom_info_text}>
              <h4>
                02 <span>+</span>
              </h4>
              <h6>years of gaming </h6>
            </div>
            <h6>
              spawned in 2021 in response to the effects & aftermath of the
              COVID-19 lockdown, where obesity, physical unfitness & lack of
              social interaction were on the rise...
            </h6>
          </div>
          <Link to={"/about-us"} className={styles.read_more_btn_mobile}>
            Read More
          </Link>
        </div>
      </section>
    </>
  );
};

export default LandingPageHistory;
