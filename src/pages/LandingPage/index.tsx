import { useRef, useEffect } from "react";
import styles from "./LandingPage.module.scss";
import { Link, useLocation } from "react-router-dom";
import dev_team_icon from "./images/dev_icon.png";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import LandingPageHero from "./Components/LandingPageHero";
import LandingPageCountDown from "./Components/LandingPageCountDown";
import LandingPageGallery from "./Components/LandingPageGallery";
import LandingPageHistory from "./Components/LandingPageHistory";
import LandingPageSLSPlayers from "./Components/LandingPageSLSPlayers";
import LandingPageAwards from "./Components/LandingPageAwards";
import LandingPageBecomeMember from "./Components/LandingPageBecomeMember";
import useApp from "../../hooks/useApp";

const LandingPage = () => {
  const memberSectionRef = useRef<HTMLDivElement>(null);
  const { setMobileNavbarOpen } = useApp();
  const location = useLocation();

  useEffect(() => {
    if (window.location.hash === "#memberSection" && memberSectionRef.current) {
      memberSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (window.location.hash === "#memberSection" && memberSectionRef.current) {
      memberSectionRef.current.scrollIntoView({ behavior: "smooth" });
      setMobileNavbarOpen(false);
    }
  }, [location]);

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LandingPage}>
          <LandingPageHero />
          <LandingPageCountDown />
          <LandingPageHistory />
          <LandingPageSLSPlayers />
          <LandingPageAwards />
          <div id="memberSection" ref={memberSectionRef}>
            <LandingPageBecomeMember />
          </div>
          <LandingPageGallery />
          <Link
            to={"/development-team"}
            className={styles.dev_team_btn}
            tabIndex={0}
          >
            {/* <h4>View Development Team</h4> */}
            <img src={dev_team_icon} alt="deveveloper team icon" />
          </Link>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LandingPage;
