import { useEffect, useRef } from "react";
import useApp from "../../hooks/useApp";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import lightModeIcon from "./images/lightModeIcon.png";
import darkModeIcon from "./images/darkModeIcon.png";
import lightHamburger from "./images/lightHamburger.png";
import darkHamburger from "./images/darkHamburger.png";
import lightCloseBurger from "./images/lightCloseBurger.png";
import darkCloseBurger from "./images/darkCloseBurger.png";

const Navbar = () => {
  const { darkMode, toggleTheme, mobileNavbarOpen, toggleMobileNavbar } =
    useApp();
  let mobileNavbarRef = useRef<HTMLDivElement>(null);
  let navHeaderRef = useRef<HTMLDivElement>(null);

  const navElements = [
    { link: "/", name: "Home" },
    { link: "/awards", name: "Awards" },
    { link: "/players", name: "Players" },
    { link: "/statistics", name: "Statistics" },
    { link: "/about-us", name: "About" },
  ];

  useEffect(() => {
    let handler = (e: Event) => {
      if (mobileNavbarOpen) {
        if (
          !mobileNavbarRef?.current?.contains(e.target as HTMLDivElement) &&
          !navHeaderRef?.current?.contains(e.target as HTMLDivElement)
        ) {
          toggleMobileNavbar();
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.Navbar_container} ref={navHeaderRef}>
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
            <button className={styles.become_member_btn}>
              Become a Member
            </button>
            {mobileNavbarOpen ? (
              <></>
            ) : (
              <div onClick={() => toggleTheme()} className={styles.theme_icon}>
                <img
                  src={darkMode ? lightModeIcon : darkModeIcon}
                  alt="website-theme-png"
                />
              </div>
            )}

            {/* hamburger */}
            <div
              onClick={() => toggleMobileNavbar()}
              className={styles.hamburger}
            >
              {mobileNavbarOpen ? (
                <img
                  src={darkMode ? darkCloseBurger : lightCloseBurger}
                  alt="hamburger-menu"
                />
              ) : (
                <img
                  src={darkMode ? darkHamburger : lightHamburger}
                  alt="hamburger-menu"
                />
              )}
            </div>
          </section>
        </div>

        {/* mobile navigation */}
        {mobileNavbarOpen ? (
          <div
            className={
              darkMode ? styles.Mobile_Nav_Dark : styles.Mobile_Nav_Light
            }
            ref={mobileNavbarRef}
          >
            <section className={styles.Navlinks_Mobile}>
              {navElements.map((elem) => {
                return (
                  <div className={styles.mobile_NavLink_container}>
                    <NavLink
                      to={elem.link}
                      key={`${elem.name}_mobile`}
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
                  </div>
                );
              })}
            </section>
            <section className={styles.become_a_member_btn_mobile}>
              <button>Become a Member</button>
            </section>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
};

export default Navbar;
