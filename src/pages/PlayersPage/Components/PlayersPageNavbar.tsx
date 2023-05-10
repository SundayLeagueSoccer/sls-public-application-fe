import styles from "../styles/PlayersPageNavbar.module.scss";
import { useContext, useEffect } from "react";
import { PlayerPageContext } from "../context/PlayersPageContext";
import useApp from "../../../hooks/useApp";
import { playerType } from "../../../types/PlayerType";

type selectedPlayerTabType =
  | "All Players"
  | "Goal Keepers"
  | "Defenders"
  | "Midfielders"
  | "Forwards";

const PlayersPageNavbar = () => {
  const navItems: selectedPlayerTabType[] = [
    "All Players",
    "Goal Keepers",
    "Defenders",
    "Midfielders",
    "Forwards",
  ];
  const { darkMode } = useApp();
  const {
    selectedPlayersTab,
    setSelectedPlayersTab,
    allPlayers,
    setPlayersToDisplay,
  } = useContext(PlayerPageContext);

  useEffect(() => {
    if (selectedPlayersTab === "All Players") {
      setPlayersToDisplay(allPlayers);
      return;
    }
    const chosenPlayers: playerType[] = allPlayers.filter(
      (player) => player.favoritePosition === selectedPlayersTab.slice(0, -1)
    );
    setPlayersToDisplay(chosenPlayers);
  }, [selectedPlayersTab]);

  return (
    <>
      <section className={darkMode ? styles.darkLine : styles.lightLine}>
        <div className={styles.PlayersPageNavbar}>
          {navItems?.map((navItem) => {
            return (
              <button
                key={navItem}
                onClick={() => setSelectedPlayersTab(navItem)}
                className={
                  selectedPlayersTab === navItem ? styles.activeTab : ""
                }
              >
                {navItem}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default PlayersPageNavbar;
