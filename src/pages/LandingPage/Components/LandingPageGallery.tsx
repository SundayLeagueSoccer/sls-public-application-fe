import styles from "../styles/LandingPageGallery.module.scss";
import PictureGallery from "./PictureGallery";
import image_one from "../images/Gallery_images/image_one.jpg";
import image_two from "../images/Gallery_images/image_two.jpg";
import image_three from "../images/Gallery_images/image_three.jpg";
import image_four from "../images/Gallery_images/image_four.jpg";
import image_five from "../images/Gallery_images/image_five.jpg";
import image_six from "../images/Gallery_images/image_six.jpg";
import image_seven from "../images/Gallery_images/image_seven.jpg";
import image_eight from "../images/Gallery_images/image_eight.jpg";
import image_nine from "../images/Gallery_images/image_nine.jpg";
import image_ten from "../images/Gallery_images/image_ten.jpg";
import image_eleven from "../images/Gallery_images/image_eleven.jpg";
import image_twelve from "../images/Gallery_images/image_twelve.jpg";

const LandingPageGallery = () => {
  return (
    <>
      <section className={styles.LandingPageGallery}>
        <h2>Sls Gallery</h2>
        <div className={styles.PictureGallery}>
          <div className={styles.PictureGallery_Container_A}>
            <PictureGallery
              image_one={image_one}
              image_two={image_two}
              image_three={image_three}
              image_four={image_four}
              image_five={image_five}
              image_six={image_six}
              general_image_alt="SLS Players"
            />
          </div>
          <div className={styles.PictureGallery_Container_B}>
            <PictureGallery
              image_one={image_seven}
              image_two={image_eight}
              image_three={image_nine}
              image_four={image_ten}
              image_five={image_eleven}
              image_six={image_twelve}
              general_image_alt="SLS Players"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPageGallery;
