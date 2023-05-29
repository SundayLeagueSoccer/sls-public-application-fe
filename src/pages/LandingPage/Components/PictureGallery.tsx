import styles from "../styles/PictureGallery.module.scss";

type PictureGalleryProps = {
  image_one: string;
  image_two: string;
  image_three: string;
  image_four: string;
  image_five: string;
  image_six: string;
  general_image_alt: string;
};

const PictureGallery = ({
  image_one,
  image_two,
  image_three,
  image_four,
  image_five,
  image_six,
  general_image_alt,
}: PictureGalleryProps) => {
  return (
    <>
      <div className={styles.PictureGallery}>
        <div className={styles.column_one}>
          <div className={styles.image_container_one}>
            <img src={image_one} alt={general_image_alt} />
          </div>
          <div className={styles.image_container_two}>
            <img src={image_two} alt={general_image_alt} />
          </div>
        </div>
        <div className={styles.column_two}>
          <div className={styles.image_container_three}>
            <img src={image_three} alt={general_image_alt} />
          </div>
          <div className={styles.image_container_four}>
            <img src={image_four} alt={general_image_alt} />
          </div>
        </div>
        <div className={styles.column_three}>
          <div className={styles.image_container_five}>
            <img src={image_five} alt={general_image_alt} />
          </div>
          <div className={styles.image_container_six}>
            <img src={image_six} alt={general_image_alt} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PictureGallery;
