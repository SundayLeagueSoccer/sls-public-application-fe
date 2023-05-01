import styles from "../styles/testCarousel.module.scss";
import test from "../images/test01.png";
import test1 from "../images/military_flares-wallpaper-1920x1080.jpg";
import test2 from "../images/vintage_car_hd-wallpaper-1920x1080.jpg";
import test3 from "../images/sniper_rifle_2-wallpaper-1920x1080.jpg";
import next_icon from "../images/next_icon.png";
import previous_icon from "../images/previous_icon.png";
import { useEffect, useRef, useState } from "react";

const TestCarousel = () => {
  const images = [test, test1, test2, test3];
  // const timerRef = useRef<number | undefined>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousImage = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextImage = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // useEffect(() => {
  //   if (timerRef.current) clearTimeout(timerRef.current);
  //   timerRef.current = setTimeout(() => {
  //     goToNextImage();
  //   }, 5000);

  //   return () => clearTimeout(timerRef.current);
  // });

  return (
    <>
      <article className={styles.CarouselImages}>
        <div className={styles.Carousel_Container}>
          <div className={styles.Carousel_Slide}>
            <img src={images[0]} alt="" className={styles.mainImage} />
            <img src={images[1]} alt="" className={styles.mainImage} />
            <img src={images[2]} alt="" className={styles.mainImage} />
            <img src={images[3]} alt="" className={styles.mainImage} />
          </div>
        </div>

        <div className={styles.controls}>
          <img src={previous_icon} alt="" onClick={() => goToPreviousImage()} />
          <img src={next_icon} alt="" onClick={() => goToNextImage()} />
        </div>
      </article>
    </>
  );
};

export default TestCarousel;
