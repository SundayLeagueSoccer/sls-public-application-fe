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
            <Navbar />
            <Outlet />
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
};

export default PublicPageLayout;
