import React, { createContext, useState } from "react";
import { playerSeasonStatsType } from "../../../types/SeasonStatsType";

type StatisticsPageContextProviderProps = {
  children: React.ReactNode;
};

type StatisticsPageContextType = {
  isOverview: boolean;
  setIsOverview: React.Dispatch<React.SetStateAction<boolean>>;
  dropDownChoice: string;
  setDropDownChoice: React.Dispatch<React.SetStateAction<string>>;
  seasonStats: playerSeasonStatsType[];
  setSeasonStats: React.Dispatch<React.SetStateAction<playerSeasonStatsType[]>>;
};

export const StatisticsPageContext = createContext(
  {} as StatisticsPageContextType
);

export default function StatisticsPageContextProvider({
  children,
}: StatisticsPageContextProviderProps) {
  const [isOverview, setIsOverview] = useState(true);

  const getCurrentSeason = () => {
    const currentTime = new Date();
    const year = currentTime.getFullYear();
    const month = currentTime.getMonth();
    const seasonPart = month < 6 ? `A` : `B`;
    return `${year}${seasonPart}`;
  };

  const [dropDownChoice, setDropDownChoice] = useState<string>("2023B");

  const [seasonStats, setSeasonStats] = useState<playerSeasonStatsType[]>([]);

  return (
    <StatisticsPageContext.Provider
      value={{
        isOverview,
        setIsOverview,
        dropDownChoice,
        setDropDownChoice,
        seasonStats,
        setSeasonStats,
      }}
    >
      {children}
    </StatisticsPageContext.Provider>
  );
}
