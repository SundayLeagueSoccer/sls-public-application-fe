import useApp from "../../hooks/useApp";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import lightModeIcon from "./images/lightModeIcon.png";
import darkModeIcon from "./images/darkModeIcon.png";
import lightHamburger from "./images/lightHamburger.png";
import darkHamburger from "./images/darkHamburger.png";
import closeBurger from "./images/closeBurger.png";

const Navbar = () => {
  const { darkMode, toggleTheme, mobileNavbarOpen, toggleMobileNavbar } =
    useApp();

  const navElements = [
    { link: "/", name: "Home" },
    { link: "/awards", name: "Awards" },
    { link: "/players", name: "Players" },
    { link: "/statistics", name: "Statistics" },
    { link: "/about-us", name: "About" },
  ];

  return (
    <>
      <nav className={styles.Navbar}>
        <h1>Logo</h1>

        <section className={styles.NavLinks_Desktop}>
          {navElements.map((elem) => {
            return (
              <NavLink
                to={elem.link}
                key={elem.name}
                className={({ isActive, isPending }) =>
                  isPending
                    ? styles.single_NavLink
                    : isActive
                    ? styles.single_NavLinkActive
                    : styles.single_NavLink
                }
              >
                {elem.name}
              </NavLink>
            );
          })}
        </section>

        <section className={styles.NavLinks_Controls}>
          <button className={styles.become_member_btn}>Become a Member</button>
          <div onClick={() => toggleTheme()} className={styles.theme_icon}>
            <img
              src={darkMode ? lightModeIcon : darkModeIcon}
              alt="website-theme-png"
            />
          </div>
          {/* hamburger */}
          <div
            onClick={() => toggleMobileNavbar()}
            className={styles.hamburger}
          >
            <img
              src={
                mobileNavbarOpen
                  ? closeBurger
                  : darkMode
                  ? darkHamburger
                  : lightHamburger
              }
              alt="hamburger-menu"
            />

            {/* <img src={closeBurger} alt="close-hamburger" /> */}
          </div>
        </section>

        {/* mobile navigation */}
        {mobileNavbarOpen ? (
          <section className={styles.Mobile_Nav}>
            <section className={styles.mobile_NavLinks}>
              {navElements.map((elem) => {
                return (
                  <NavLink
                    to={elem.link}
                    key={elem.name}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? styles.mobile_NavLink
                        : isActive
                        ? styles.mobile_NavLinkActive
                        : styles.mobile_NavLink
                    }
                  >
                    {elem.name}
                  </NavLink>
                );
              })}
            </section>
            <button>Become a Member</button>
          </section>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
};

export default Navbar;
