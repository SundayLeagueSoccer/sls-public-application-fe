type imageType = {
  public_id: string;
  url: string;
};

type seasonStatsType = {
  season: string;
  goals: number;
  assists: number;
  cleanSheets: number;
  yellowCards: number;
  redCards: number;
};

export type playerSeasonStatsType = {
  name: string;
  alias: string;
  image: imageType;
  stats: seasonStatsType[];
};
