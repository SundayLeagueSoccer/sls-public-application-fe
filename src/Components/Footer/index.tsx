import styles from "./Footer.module.scss";
import useApp from "../../hooks/useApp";
import { Link } from "react-router-dom";
import whatsapp_icon from "./images/twitter.png";
import instagram_icon from "./images/twitter.png";
import youtube_icon from "./images/twitter.png";

const Footer = () => {
  const { darkMode, toggleTheme, mobileNavbarOpen, toggleMobileNavbar } =
    useApp();

  const footerLinks = [
    { link: "/home", name: "Home" },
    { link: "/awards", name: "Awards" },
    { link: "/about-us", name: "About" },
    { link: "/statistics", name: "Statistics" },
    { link: "/players", name: "Players" },
  ];

  const socialMediaLinks = [
    { link: "https://wa.me/qr/OBTAOV36SJ7VI1", image: whatsapp_icon },
    {
      link: "https://instagram.com/sls.ng?igshid=ZDdkNTZiNTM=",
      image: instagram_icon,
    },
    {
      link: "https://www.youtube.com/channel/UCXo2dJMVLukdliFi7-HgNDQ",
      image: youtube_icon,
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
          <button>Become a Member</button>
        </section>
        <section
          className={
            darkMode ? styles.Footer_links_dark : styles.Footer_links_light
          }
        >
          <h4>Logo</h4>
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
                  <img src={elem.image} alt={`${elem.image}icon`} />
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
