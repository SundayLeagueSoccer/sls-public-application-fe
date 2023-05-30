import { useEffect, useRef, useState } from "react";
import styles from "../styles/CarouselImages.module.scss";
import next_icon from "../images/next_icon.png";
import previous_icon from "../images/previous_icon.png";

//images for carousel
import image_one from "../images/Carousel_images/image_one.jpg";
import image_two from "../images/Carousel_images/image_two.jpg";
import image_three from "../images/Carousel_images/image_three.jpg";
import image_four from "../images/Carousel_images/image_four.jpg";
import image_five from "../images/Carousel_images/image_five.jpg";

const CarouselImages = () => {
  const images = [image_one, image_two, image_three, image_four, image_five];
  const [width, setWidth] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const timerRef: React.MutableRefObject<any> =
    useRef<React.MutableRefObject<any> | null>(null);

  const handleImageLoad = () => {
    if (imageRef.current) {
      setWidth(imageRef.current.width);
    }
  };

  const goToPrev = () => {
    const isFirstSlide = counter === 0;
    const newIndex = isFirstSlide ? images.length - 1 : counter - 1;
    setCounter(newIndex);
    setDistance(width * newIndex);
  };

  const goToNext = () => {
    const isLastSlide = counter === images.length - 1;
    const newIndex = isLastSlide ? 0 : counter + 1;
    setCounter(newIndex);
    setDistance(width * newIndex);
  };

  const carousel_Slide_Screen = {
    display: "flex",
    width: "100%",
    transition: "transform ease-in-out 0.4s",
    transform: `translateX(-${distance}px)`,
  };

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 3000);

    return () => clearTimeout(timerRef.current);
  });

  return (
    <>
      <article className={styles.Carousel}>
        <div className={styles.Carousel_Container}>
          <div className={styles.Carousel_Slide}>
            <div
              className={styles.Carousel_Slide_Screen}
              style={carousel_Slide_Screen}
            >
              <img src={images[0]} alt="Players at SLS playing together." />
              <img
                src={images[1]}
                alt="Players at SLS playing together."
                ref={imageRef}
                onLoad={handleImageLoad}
              />
              <img src={images[2]} alt="Players at SLS playing together." />
              <img src={images[3]} alt="Players at SLS playing together." />
              <img src={images[4]} alt="Players at SLS playing together." />
            </div>
          </div>
        </div>
        <div className={styles.controls}>
          <img
            src={previous_icon}
            alt="Previous Button"
            onClick={() => goToPrev()}
          />
          <img src={next_icon} alt="Next Button" onClick={() => goToNext()} />
        </div>
      </article>
    </>
  );
};

export default CarouselImages;
