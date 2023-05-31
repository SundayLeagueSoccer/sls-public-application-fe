import styles from "../styles/LandingPageBecomeMember.module.scss";
import PlayerInJersery from "../images/become_a_member_img.png";
import OrangeIcon from "../images/orange_boxes_svg.svg";
import GreenIcon from "../images/green_chatLogo_svg.svg";
import useApp from "../../../hooks/useApp";

type CardItemProps = {
  icon: string;
  mainText: string;
  secondaryText: string;
};

const CardItem = ({ icon, mainText, secondaryText }: CardItemProps) => {
  const { darkMode } = useApp();
  const cardItemStyles = {
    boxShadow: darkMode
      ? "0px 2px 4px rgba(255, 255, 255, 0.1)"
      : " 0px 2px 4px rgba(0, 0, 0, 0.1)",
  };
  return (
    <div className={styles.card_item} style={cardItemStyles}>
      <img src={icon} alt="an icon image" />
      <div>
        <h6>{mainText}</h6>
        <p>{secondaryText}</p>
      </div>
    </div>
  );
};
const LandingPageBecomeMember = () => {
  return (
    <>
      <section className={styles.LandingPageBecomeMember}>
        {/* LEFT SIDE TEXT CONTAINER AND TEXT CONTENT */}
        <div className={styles.text_container}>
          <div>
            <h4>How to become a member</h4>
            <p>
              Interested in training with us and improving your skills? Train
              with lots of folks.
            </p>
          </div>

          {/* MOBILE VIEW IMAGE */}
          <img
            className={styles.mobile_image}
            src={PlayerInJersery}
            alt="a football player wearing a blue jersey"
          />

          {/* TEXT CONTAINER CARD ITEMS */}
          <div className={styles.card_item_container}>
            <CardItem
              icon={GreenIcon}
              mainText="Training"
              secondaryText="Get a preliminary invitation from any of our existing members. Come play with us for a few weeks. "
            />
            <CardItem
              icon={OrangeIcon}
              mainText="Waiting Period"
              secondaryText="You have to play 3 months with us before you become eligible for membership. It’s all fun, so it shouldn’t be too difficult."
            />
          </div>
        </div>{" "}
        {/* LEFT SIDE TEXT CONTAINER ENDS HERE*/}
        {/* RIGHT SIDE DESKTOP IMAGE */}
        <img
          className={styles.desktop_image}
          src={PlayerInJersery}
          alt="a football player wearing a blue jersey"
        />
        {/* RIGHT SIDE DESKTOP IMAGE ENDS HERE */}
      </section>
    </>
  );
};

export default LandingPageBecomeMember;
