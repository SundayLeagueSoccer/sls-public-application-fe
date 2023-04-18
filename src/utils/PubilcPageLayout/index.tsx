import styles from "./PublicPageLayout.module.scss";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";
import useApp from "../../hooks/useApp";

const PublicPageLayout = () => {
  const { darkMode } = useApp();

  return (
    <>
      <main className={darkMode ? styles.Dark : styles.Light}>
        <div className={styles.PublicPageLayout}>
          <section className={styles.main_container}>
            <div className={styles.Navbar_container}>
              <Navbar />
            </div>
            <div className={styles.Outlet_container}>
              <Outlet />
            </div>
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
};

export default PublicPageLayout;
