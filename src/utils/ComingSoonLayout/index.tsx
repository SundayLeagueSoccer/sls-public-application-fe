import styles from "./ComingSoonLayout.module.scss";
import ComingSoon from "./images/comingSoon.png";

type ComingSoonLayoutProps = {
  headerText: string;
};

const ComingSoonLayout = ({ headerText }: ComingSoonLayoutProps) => {
  return (
    <>
      <section className={styles.ComingSoonLayout}>
        <h4>{headerText}</h4>
        <img src={ComingSoon} alt="Coming Soon" />
      </section>
    </>
  );
};
export default ComingSoonLayout;
