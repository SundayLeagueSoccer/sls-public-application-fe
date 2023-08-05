import styles from "./Footer.module.scss";
import useApp from "../../hooks/useApp";
import { Link } from "react-router-dom";
import Whatsapp from "./images/whatsapp.png";
import Instagram from "./images/instagram.png";
import Youtube from "./images/youtube.png";
import SlsLogo from "../SlsLogo";

const Footer = () => {
  const { darkMode } = useApp();

  const footerLinks = [
    { link: "/home", name: "Home" },
    { link: "/awards", name: "Awards" },
    { link: "/about-us", name: "About" },
    { link: "/statistics", name: "Statistics" },
    { link: "/players", name: "Players" },
  ];

  const socialMediaLinks = [
    { link: "https://wa.me/qr/OBTAOV36SJ7VI1", image: Whatsapp },
    {
      link: "https://instagram.com/sls.ng?igshid=ZDdkNTZiNTM=",
      image: Instagram,
    },
    {
      link: "https://www.youtube.com/channel/UCXo2dJMVLukdliFi7-HgNDQ",
      image: Youtube,
    },
  ];

  const getYear = () => {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return `© ${currentYear} Sls. All rights reserved.`;
  };

  return (
    <>
      <footer className={styles.Footer}>
        <section className={styles.Footer_quote}>
          <h3>Soccer is life, the rest is just details.</h3>
          <h4>Join us to put the “kick” in kick-off.</h4>
          <Link to="/home#memberSection" className={styles.become_member_btn}>
            Become a Member
          </Link>
        </section>
        <section
          className={
            darkMode ? styles.Footer_links_dark : styles.Footer_links_light
          }
        >
          <SlsLogo />
          <div className={styles.links}>
            {footerLinks.map((elem) => {
              return (
                <Link
                  to={elem.link}
                  key={elem.name}
                  className={
                    darkMode
                      ? styles.single_Link_dark
                      : styles.single_Link_light
                  }
                >
                  {elem.name}
                </Link>
              );
            })}
          </div>
        </section>
        <section className={styles.Footer_base}>
          <p>{getYear()}</p>
          <div className={styles.footer_socialMedia}>
            {socialMediaLinks.map((elem) => {
              return (
                <Link
                  to={elem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={elem.image}
                  className={styles.socialMedia_link}
                >
                  <img src={elem.image} alt={`${elem.image} Button`} />
                </Link>
              );
            })}
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
