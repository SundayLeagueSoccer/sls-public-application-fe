import styles from "./Loader.module.scss";

const Loader = () => {
  const components = [];

  for (let i = 0; i < 4; i++) {
    components.push(
      <div className={styles.DummyLoader}>
        <div className={styles.container}>
          <div className={styles.textBox}>
            <div className={styles.mainText}></div>
            <div className={styles.container_secondary}>
              <div className={styles.subText}></div>
              <div className={styles.subText}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className={styles.Loader}>
        {components.map((component) => component)}
      </section>
    </>
  );
};

export default Loader;
