import styles from "../styles/PlayersPageHeader.module.scss";

const PlayersPageHeader = () => {
  return (
    <>
      <section className={styles.PlayersPageHeader}>
        <div className={styles.mainText}>
          <h2>Players</h2>
          <h1>We put the kick in kick-off...</h1>
        </div>
        <p>
          We believe that football is not just a game, but a way of life. That's
          why our league is more than just drills and exercises. They're a way
          develop the tactical understanding you need to dominate on the field.
        </p>
      </section>
    </>
  );
};

export default PlayersPageHeader;
