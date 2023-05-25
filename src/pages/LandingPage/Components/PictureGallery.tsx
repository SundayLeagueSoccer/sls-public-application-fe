import styles from "../styles/PictureGallery.module.scss";
import image_one from "../images/Rectangle 4593.png";
import image_two from "../images/Rectangle 4596.png";
import image_three from "../images/Rectangle 4599.png";

const PictureGallery = () => {
  return (
    <>
      <div className={styles.PictureGallery}>
        <div className={styles.column_one}>
          <div className={styles.image_container_one}>
            <img src={image_one} alt="" />
          </div>
          <div className={styles.image_container_two}></div>
        </div>
        <div className={styles.column_two}>
          <div className={styles.image_container_three}></div>
          <div className={styles.image_container_four}></div>
        </div>
        <div className={styles.column_three}>
          <div className={styles.image_container_five}></div>
          <div className={styles.image_container_six}></div>
        </div>
      </div>
    </>
  );
};

export default PictureGallery;
