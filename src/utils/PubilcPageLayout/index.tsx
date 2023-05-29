import styles from "./PublicPageLayout.module.scss";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";
import useApp from "../../hooks/useApp";
import { useEffect } from "react";

const PublicPageLayout = () => {
  const { darkMode, setMobileNavbarOpen } = useApp();

  useEffect(() => {
    window.scrollTo({
      top: -200,
      left: 0,
      behavior: "smooth",
    });

    setMobileNavbarOpen(false);
  }, []);

  return (
    <>
      <main className={darkMode ? styles.Dark : styles.Light}>
        <div className={styles.PublicPageLayout}>
          <section className={styles.main_container}>
            <div className={styles.Navbar_container}>
              <div className={styles.Navbar_Child_Container}>
                <Navbar />
              </div>
            </div>
            <div className={styles.Outlet_container}>
              <div className={styles.Outlet_Child_Container}>
                <Outlet />
              </div>
            </div>
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
};

export default PublicPageLayout;
