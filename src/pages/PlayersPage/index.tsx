import styles from "./PlayersPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import PlayersPageHeader from "./Components/PlayersPageHeader";
import PlayersPagePaginationControls from "./Components/PlayersPagePaginationControls";
import PlayersList from "./Components/PlayersList";
import PlayersPageNavbar from "./Components/PlayersPageNavbar";
import PlayerPageContext from "./context/PlayersPageContext";

const PlayersPage = () => {
  return (
    <>
      <PlayerPageContext>
        <AnimatedFadeInPage>
          <main className={styles.PlayersPage}>
            <PlayersPageHeader />
            <div className={styles.Players_containers}>
              <PlayersPageNavbar />
              <PlayersList />
              <PlayersPagePaginationControls />
            </div>
          </main>
        </AnimatedFadeInPage>
      </PlayerPageContext>
    </>
  );
};

export default PlayersPage;
