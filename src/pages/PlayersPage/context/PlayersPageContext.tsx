import React, { createContext, useState } from "react";

type selectedPlayerTabType =
  | "All Players"
  | "Goal Keeper"
  | "Defender"
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
};

export const PlayerPageContext = createContext({} as PlayersPageContextType);

export default function PlayerPageContextProvider({
  children,
}: PlayersPageContextProviderProps) {
  const [selectedPlayersTab, setSelectedPlayersTab] =
    useState<selectedPlayerTabType>("All Players");

  return (
    <PlayerPageContext.Provider
      value={{
        selectedPlayersTab,
        setSelectedPlayersTab,
      }}
    >
      {children}
    </PlayerPageContext.Provider>
  );
}
