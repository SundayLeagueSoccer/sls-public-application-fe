import styles from "../styles/PlayersPageNavbar.module.scss";
import { useContext } from "react";
import { PlayerPageContext } from "../context/PlayersPageContext";
import useApp from "../../../hooks/useApp";

type selectedPlayerTabType =
  | "All Players"
  | "Goal Keeper"
  | "Defender"
  | "Midfielders"
  | "Forwards";

const PlayersPageNavbar = () => {
  const navItems: selectedPlayerTabType[] = [
    "All Players",
    "Goal Keeper",
    "Defender",
    "Midfielders",
    "Forwards",
  ];
  const { darkMode } = useApp();

  const { selectedPlayersTab, setSelectedPlayersTab } =
    useContext(PlayerPageContext);

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
