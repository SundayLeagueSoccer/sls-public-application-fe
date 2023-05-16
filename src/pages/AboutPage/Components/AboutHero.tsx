import styles from "../styles/AboutHero.module.scss";

const AboutHero = () => {
  return (
    <>
      <section className={styles.AboutHero}>
        <div className={styles.header_text_box}>
          <p className={styles.subheading}>About us</p>
          <h1 className={styles.heading}>We do things differently...</h1>
        </div>

        <p className={styles.support_text}>
          We believe that football is not just a game, but a way of life. That's
          why our league is more than just drills and exercises. They're a way
          to develop the tactical understanding you need need to dominate the
          field.
        </p>
      </section>
    </>
  );
};

export default AboutHero;
