import styles from "../styles/AboutTestimonial.module.scss";
import TestimonialCarousel from "./TestimonialCarousel";

const AboutTestimonial = () => {
  return (
    <>
      <section className={styles.AboutTestimonial}>
        <div className={styles.left}>
          <h3>Testimonial</h3>
          <h2>
            <span>SLS</span> Players thoughts
          </h2>
          <p>
            There's something special about seeing a community come together to
            make a difference! Our team is a tight-knit group who share a love
            for the game and embrace every opportunity to play.
          </p>
        </div>
        <div className={styles.right}>
          <TestimonialCarousel />
        </div>
      </section>
    </>
  );
};

export default AboutTestimonial;
