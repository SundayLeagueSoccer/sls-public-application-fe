import styles from "../styles/AboutTestimonial.module.scss";

// Image
import TestimonialImage from "../images/testimonial.png";
import Arrow from "../images/arrow.png";

const AboutTestimonial = () => {
  return (
    <>
      <section className={styles.AboutTestimonial}>
        <div className={styles.AboutTestimonial_Text}>
          <h4>Testimonial</h4>
          <h2>
            <span>SLS</span> Players thoughts
          </h2>
          <p>
            There's something special about seeing a community come together to
            make a difference! Our team is a tight-knit group who share a love
            for the game and embrace every opportunity to play.
          </p>
        </div>
        <div className={styles.AboutTestimonial_Image}>
          <img src={TestimonialImage} alt="" />
          {/* Testimony under Image */}
          <div className={styles.AboutTestimonial_WriteUp}>
            <div className={styles.AboutTestimonial_WriteUp_Text}>
              <p>
                "This league is an absolute lifesaver! It's like a little slice
                of heaven where I can work on my game, meet some awesome people,
                and just forget about all the weekday stress. Seriously, thanks
                for this!"
              </p>
            </div>
            <div className={styles.AboutTestimonial_WriteUp_Author}>
              <h4>Kelvin Distinction</h4>
              <div className={styles.AboutTestimonial_Profile}>
              <b>View Profile</b>
              <img src={Arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTestimonial;
