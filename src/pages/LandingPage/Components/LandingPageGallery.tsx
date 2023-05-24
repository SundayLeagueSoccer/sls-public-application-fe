import styles from "../styles/LandingPageGallery.module.scss";
import PictureGallery from "./PictureGallery";

const LandingPageGallery = () => {
  return (
    <>
      <section className={styles.LandingPageGallery}>
        <h2>Sls Gallery</h2>
        <div className={styles.PictureGallery}>
          <div className={styles.PictureGallery_Container_A}>
            <PictureGallery />
          </div>
          <div className={styles.PictureGallery_Container_B}>
            <PictureGallery />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPageGallery;
