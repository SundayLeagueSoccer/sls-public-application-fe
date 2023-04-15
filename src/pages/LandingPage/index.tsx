import styles from "./LandingPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [y, sety] = useState(window.innerHeight);
  const [x, setx] = useState(window.innerWidth);

  useEffect(() => {
    var w = window.innerWidth;
    var h = window.innerHeight;
    setx(w);
    sety(h);
  }, [y, x]);

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.LandingPage}>
          <h1>LandingPage</h1>
          <p>{`height ${y}`}</p>
          <p>{`width ${x}`}</p>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default LandingPage;
