import styles from "../styles/PlayersPagePaginationControls.module.scss";
import useApp from "../../../hooks/useApp";
import BackwardIconLink from "../../../assets/svgs/BarckwardIconLink";
import ForwardIconLink from "../../../assets/svgs/ForwardIconLink";
import { PlayerPageContext } from "../context/PlayersPageContext";
import { useContext } from "react";

const PlayersPagePaginationControls = () => {
  const { darkMode } = useApp();
  const { currentPage, setcurrentPage, paginationLimit } =
    useContext(PlayerPageContext);

  const pageNumbers: number[] = [];
  for (let i = 1; i < paginationLimit + 1; i++) {
    pageNumbers.push(i);
  }

  const handlePaginate = (requestedPage: number) => {
    setcurrentPage(requestedPage);
  };

  const handleGoToNextPage = () => {
    const isLastPage = currentPage >= paginationLimit;
    if (!isLastPage) {
      setcurrentPage((currentPage) => currentPage + 1);
    }
  };

  const handleGoToPreiousPage = () => {
    if (currentPage > 1) {
      setcurrentPage((currentPage) => currentPage - 1);
    }
  };

  return (
    <>
      <section className={styles.PaginationControls}>
        <div className={darkMode ? styles.dark_line : styles.light_line}></div>
        <div className={styles.controls_mobile}>
          <button onClick={() => handleGoToPreiousPage()}>
            <BackwardIconLink fillColor={"#344054"} />
            <p>Previous</p>
          </button>
          <button onClick={() => handleGoToNextPage()}>
            <p>Next</p>
            <ForwardIconLink fillColor={"#344054"} />
          </button>
        </div>
        <div className={styles.controls_desktop}>
          <button onClick={() => handleGoToPreiousPage()}>
            <BackwardIconLink fillColor={darkMode ? "#d0d5dd" : "#344054"} />
            <p>Previous</p>
          </button>
          <div className={styles.pageLists}>
            {pageNumbers.map((num) => (
              <p
                tabIndex={0}
                key={num}
                className={currentPage === num ? styles.pageNumberActive : ""}
                onClick={() => handlePaginate(num)}
              >
                {num}
              </p>
            ))}
          </div>
          <button onClick={() => handleGoToNextPage()}>
            <p>Next</p>
            <ForwardIconLink fillColor={darkMode ? "#d0d5dd" : "#344054"} />
          </button>
        </div>
      </section>
    </>
  );
};

export default PlayersPagePaginationControls;
