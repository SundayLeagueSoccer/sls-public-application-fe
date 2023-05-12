import styles from '../styles/LandingPageFeatures.module.scss';
import {
  chatIcon,
  cubeBox,
  featuredPlayer,
  patternImage,
} from '../images/featured_images/images';
import useApp from '../../../hooks/useApp';

const LandingPageFeatures = () => {
  const { darkMode } = useApp();
  return (
    <section className={styles.LandingPageFeatures}>
      <img
        src={patternImage}
        alt="background pattern"
        className={styles.patternImage}
      />
      <article className={styles.LandingPageFeatures_featured}>
        <figure className={styles.LandingPageFeatures_featured_image}>
          <div className={styles.featured_content_sm}>
            <header>
              <h2>Top player of the month</h2>
            </header>
            <p>
              This month, we have been fortunate to have a player who has been
              delivering nothing but excellence on the field.
            </p>
          </div>
          <img src={featuredPlayer} alt="featured player" />
        </figure>
        <div className={styles.featured_content}>
          <header>
            <h2>Top player of the month</h2>
          </header>
          <p className={styles.featured_subtext}>
            This month, we have been fortunate to have a player who has been
            delivering nothing but excellence on the field.
          </p>
          <div className={styles.featured_cards}>
            <article className={styles.featured_card}>
              <div className={styles.featured_card_image}>
                <img src={cubeBox} alt="box icon" />
              </div>
              <div className={styles.featured_card_desc}>
                <h3>Congratulations</h3>
                <p>
                  Congratulations to our player of the month for their
                  outstanding performances and contributions!
                </p>
              </div>
            </article>
            <article className={styles.featured_card}>
              <div className={styles.featured_card_image}>
                <img src={chatIcon} alt="box icon" />
              </div>
              <div className={styles.featured_card_desc}>
                <h3>Quote from Player</h3>
                <p>
                  Grateful for the opportunity to play the game I love at such a
                  high level. Thanks to the training ground, I can keep
                  improving!
                </p>
              </div>
            </article>
          </div>
        </div>
      </article>
    </section>
  );
};

export default LandingPageFeatures;
