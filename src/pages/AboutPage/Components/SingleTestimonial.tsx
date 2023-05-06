import styles from "../styles/SingleTestimonial.module.scss";
import dummyImage from "../images/dummyTestimonialImage.png";
import useApp from "../../../hooks/useApp";

type SingleTestimonialProp = {
  playerPosition: string;
  testimonialText: string;
  playerName: string;
  playerImage?: string;
};

const SingleTestimonial = ({
  playerPosition,
  testimonialText,
  playerName,
  playerImage,
}: SingleTestimonialProp) => {
  const { darkMode } = useApp();

  let borderColor;
  const getBorderColor = (_playerPosition: string) => {
    if (_playerPosition === "MF") borderColor = "#fd8a3c";
    if (_playerPosition === "DEF") borderColor = "#f93b3d";
    if (_playerPosition === "GK") borderColor = "#3aac8a";
    if (_playerPosition === "STR") borderColor = "#01b3ce";
  };

  getBorderColor(playerPosition);

  const DetailsStyle = {
    borderLeft: `6px ${borderColor} solid`,
    backgroundColor: darkMode ? "#001530" : "#fbfbfb",
    boxShadow: `inset 1.57604px 3.15207px 47.2811px ${
      darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(41, 44, 124, 0.1)"
    }`,
  };

  function toCapitalizeEachWord(str: string) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <>
      <article className={styles.Testimonial_Parent_Container}>
        <div className={styles.Testimonial}>
          <img
            src={playerImage ? playerImage : dummyImage}
            alt="a player struting his stuff"
          />
          <div className={styles.Details} style={DetailsStyle}>
            <p>{`"${testimonialText}"`}</p>
            <h5>{toCapitalizeEachWord(playerName)}</h5>
          </div>
        </div>
      </article>
    </>
  );
};

export default SingleTestimonial;
