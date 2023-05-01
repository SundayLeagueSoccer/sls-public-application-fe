import { useState, useEffect } from "react";
import styles from "../styles/AboutTestimonial.module.scss";

// Image
import TestimonialImage from "../images/testimonial.png";
import Arrow from "../images/arrow.png";

// testimonial
import { testimonials } from "../assets/testimonials";

const AboutTestimonial = () => {
  const [testimonies, setTestimonies] = useState(testimonials);
  useEffect(() => {
    // console.log(testimony.postion)
  }, []);

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
        {testimonies.map((testimony) => (
          <div className={styles.AboutTestimonial_Image}>
            <img src={TestimonialImage} alt="" />
            {/* Testimony under Image */}
            <div
              className={
                testimony.postion === "DEF"
                  ? styles.AboutTestimonial_WriteUp_def
                  : testimony.postion === "AMF"
                  ? styles.AboutTestimonial_WriteUp_amf
                  : testimony.postion === "STR"
                  ? styles.AboutTestimonial_WriteUp_str
                  : testimony.postion === "GOL"
                  ? styles.AboutTestimonial_WriteUp_gol
                  : styles.AboutTestimonial_WriteUp
              }
            >
              <div className={styles.AboutTestimonial_WriteUp_Text}>
                <p>{testimony.statement}</p>
              </div>
              <div className={styles.AboutTestimonial_WriteUp_Author}>
                <h4>{testimony.playerName}</h4>
                <div className={styles.AboutTestimonial_Profile}>
                  <b>View Profile</b>
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default AboutTestimonial;
