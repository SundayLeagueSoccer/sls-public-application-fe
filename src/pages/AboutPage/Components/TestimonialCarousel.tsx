import { useEffect, useRef, useState } from "react";
import styles from "../styles/TestimonialCarousel.module.scss";
import next_icon from "../images/next_icon.png";
import SingleTestimonial from "./SingleTestimonial";
import { testimonials } from "../assets/testimonials";

const TestimonialCarousel = () => {
  const randomTestimonials = testimonials
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  const [width, setWidth] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const timerRef: React.MutableRefObject<any> =
    useRef<React.MutableRefObject<any> | null>(null);

  const goToNext = () => {
    const isLastSlide = counter === randomTestimonials.length - 1;
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
    }, 6000);

    return () => clearTimeout(timerRef.current);
  });

  useEffect(() => {
    if (testimonialRef.current) {
      setWidth(testimonialRef.current.getBoundingClientRect().width);
      // setWidth(testimonialRef.current.clientWidth);
    }
  }, []);

  return (
    <>
      <article className={styles.Carousel}>
        <div className={styles.Carousel_Container}>
          <div className={styles.Carousel_Slide_Screen}>
            <div
              className={styles.Carousel_Slide}
              style={carousel_Slide_Screen}
            >
              {randomTestimonials.map((testimonial) => {
                return (
                  <div className={styles.small_parent} ref={testimonialRef}>
                    <SingleTestimonial
                      playerPosition={testimonial.position}
                      testimonialText={testimonial.statement}
                      playerName={testimonial.playerName}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button className={styles.controls}>
          <img src={next_icon} alt="Next Button" onClick={() => goToNext()} />
        </button>
      </article>
    </>
  );
};

export default TestimonialCarousel;
