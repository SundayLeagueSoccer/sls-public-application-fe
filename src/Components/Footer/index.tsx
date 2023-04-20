import styles from "./Footer.module.scss";
import useApp from "../../hooks/useApp";
import { Link } from "react-router-dom";
import twitter_icon from "./images/twitter.png";

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
    { link: "/", image: twitter_icon },
    // { link: "/awards", image: "Awards" },
    // { link: "/players", image: "Players" },
    // { link: "/statistics", image: "Statistics" },
    // { link: "/about-us", image: "About" },
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
