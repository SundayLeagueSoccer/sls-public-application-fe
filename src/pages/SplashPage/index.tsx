import styles from "./SplashPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { useEffect } from "react";
import useApp from "../../hooks/useApp";
import football from "./images/football.png";
import { useNavigate } from "react-router-dom";

const SplashPage = () => {
  const { darkMode } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }, []);

  return (
    <>
      <AnimatedFadeInPage>
        <main
          className={
            darkMode ? styles.SplashPage_dark : styles.SplashPage_light
          }
        >
          <img
            src={football}
            alt="rolling-ball"
            className={styles.landingloader}
          />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SplashPage;
