import styles from "../styles/PlayersPagePaginationControls.module.scss";
import useApp from "../../../hooks/useApp";
import BackwardIconLink from "../../../assets/svgs/BarckwardIconLink";
import ForwardIconLink from "../../../assets/svgs/ForwardIconLink";

const PlayersPagePaginationControls = () => {
  const { darkMode } = useApp();
  const currentPage = false;

  const pageNumbers = ["1", "2", "3", "4", "5"];
  return (
    <>
      <section className={styles.PaginationControls}>
        <div className={darkMode ? styles.dark_line : styles.light_line}></div>
        <div className={styles.controls_mobile}>
          <button>
            <BackwardIconLink fillColor={"#344054"} />
            <p>Previous</p>
          </button>
          <button>
            <p>Next</p>
            <ForwardIconLink fillColor={"#344054"} />
          </button>
        </div>
        <div className={styles.controls_desktop}>
          <button>
            <BackwardIconLink fillColor={darkMode ? "#d0d5dd" : "#344054"} />
            <p>Previous</p>
          </button>
          <div className={styles.pageLists}>
            {pageNumbers.map((num) => (
              <p
                tabIndex={0}
                key={num}
                className={currentPage ? styles.pageNumberActive : ""}
              >
                {num}
              </p>
            ))}
          </div>
          <button>
            <p>Next</p>
            <ForwardIconLink fillColor={darkMode ? "#d0d5dd" : "#344054"} />
          </button>
        </div>
      </section>
    </>
  );
};

export default PlayersPagePaginationControls;
