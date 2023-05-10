type imageType = {
  public_id: string;
  url: string;
};

type socialMediaType = {
  facebook: string;
  instagram: string;
  twitter: string;
};

type seasonStatsType = {
  season: string;
  goals: number;
  assists: number;
  cleanSheets: number;
  yellowCards: number;
  redCards: number;
};

export type playerType = {
  name: string;
  alias: string;
  playerQuote: string;
  positions: string[];
  favoritePosition: "Midfielder" | "Defender" | "Goal Keeper" | "Striker";
  image: imageType;
  socialMedia: socialMediaType;
  stats: {
    legacyGoals: number;
    futureStats: seasonStatsType[];
  };
};
