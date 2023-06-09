import React, { createContext, useState } from "react";
import { playerType } from "../../../types/PlayerType";

type selectedPlayerTabType =
  | "All Players"
  | "Goal Keepers"
  | "Defenders"
  | "Midfielders"
  | "Forwards";

type PlayersPageContextProviderProps = {
  children: React.ReactNode;
};

type PlayersPageContextType = {
  selectedPlayersTab: string;
  setSelectedPlayersTab: React.Dispatch<
    React.SetStateAction<selectedPlayerTabType>
  >;
  allPlayers: playerType[];
  setAllPlayers: React.Dispatch<React.SetStateAction<playerType[]>>;
  playersToDisplay: playerType[];
  setPlayersToDisplay: React.Dispatch<React.SetStateAction<playerType[]>>;
  currentPage: number;
  setcurrentPage: React.Dispatch<React.SetStateAction<number>>;
  paginationLimit: number;
  setPaginationLimit: React.Dispatch<React.SetStateAction<number>>;
};

export const PlayerPageContext = createContext({} as PlayersPageContextType);

export default function PlayerPageContextProvider({
  children,
}: PlayersPageContextProviderProps) {
  const [selectedPlayersTab, setSelectedPlayersTab] =
    useState<selectedPlayerTabType>("All Players");

  const [allPlayers, setAllPlayers] = useState<playerType[]>([]);
  const [playersToDisplay, setPlayersToDisplay] =
    useState<playerType[]>(allPlayers);
  const [currentPage, setcurrentPage] = useState(1);
  const [paginationLimit, setPaginationLimit] = useState(10);

  return (
    <PlayerPageContext.Provider
      value={{
        selectedPlayersTab,
        setSelectedPlayersTab,
        allPlayers,
        setAllPlayers,
        playersToDisplay,
        setPlayersToDisplay,
        currentPage,
        setcurrentPage,
        paginationLimit,
        setPaginationLimit,
      }}
    >
      {children}
    </PlayerPageContext.Provider>
  );
}
