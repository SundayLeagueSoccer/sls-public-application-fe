import styles from "./Loader.module.scss";

const Loader = () => {
  const components = [];

  for (let i = 0; i < 4; i++) {
    components.push(<div className={styles.DummyLoader}></div>);
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
