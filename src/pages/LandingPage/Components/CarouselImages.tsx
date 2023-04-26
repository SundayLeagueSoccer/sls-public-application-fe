import styles from "../styles/CarouselImages.module.scss";
import test from "../images/test01.png";

const CarouselImages = () => {
  return (
    <>
      <section className={styles.CarouselImages}>
        <img src={test} alt="" />
      </section>
    </>
  );
};

export default CarouselImages;
