import styles from "../styles/PlayersPageNavbar.module.scss";
import { useContext, useEffect } from "react";
import { PlayerPageContext } from "../context/PlayersPageContext";
import useApp from "../../../hooks/useApp";
import { playerType } from "../../../types/PlayerType";
import CustomDropdown from "../../../utils/CustomDropdown/CustomDropdown";

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
    setcurrentPage,
    setPaginationLimit,
  } = useContext(PlayerPageContext);

  useEffect(() => {
    if (selectedPlayersTab === "All Players") {
      setPlayersToDisplay(allPlayers);
      setPaginationLimit(Math.floor(allPlayers.length / 12) + 1);
      setcurrentPage(1);
      return;
    }
    const chosenPlayers: playerType[] = allPlayers.filter(
      (player) => player.favoritePosition === selectedPlayersTab.slice(0, -1)
    );
    setPlayersToDisplay(chosenPlayers);
    setPaginationLimit(Math.floor(chosenPlayers.length / 12) + 1);
    setcurrentPage(1);
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
        <div className={styles.Mobile_DropdownMenu}>
          <CustomDropdown
            defaultSelection={selectedPlayersTab}
            possibleOptions={navItems}
            customOnChange={setSelectedPlayersTab}
            customDropdownTitle={"Positions"}
          />
        </div>
      </section>
    </>
  );
};

export default PlayersPageNavbar;
