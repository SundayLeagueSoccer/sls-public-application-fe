import useApp from "../../hooks/useApp";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { toggleTheme } = useApp();

  return (
    <>
      <nav className={styles.Navbar}>
        <Link to="/">Home</Link>
        <Link to="/awards">awards</Link>
        <Link to="/players">players</Link>
        <Link to="/statistics">statistics</Link>
        <Link to="/about-us">About</Link>
        <button onClick={() => toggleTheme()}>Toggle</button>
      </nav>
    </>
  );
};

export default Navbar;
