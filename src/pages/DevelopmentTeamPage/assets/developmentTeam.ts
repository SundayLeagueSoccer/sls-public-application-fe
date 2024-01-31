export type developmentTeamType = {
  fullName: string;
  role: string;
  socials: {
    twitterLink?: string;
    portfolioLink?: string;
    linkedinLink?: string;
    githubLink?: string;
  };
};

export const developmentTeam: developmentTeamType[] = [
  {
    fullName: "Esedere Oghenetega",
    role: "Fullstack Developer, Project Lead",
    socials: {
      linkedinLink: "https://www.linkedin.com/in/oghenetega-esedere/",
      githubLink: "https://github.com/arcteggzz",
      portfolioLink: "https://my-portfolio-arcteggzz.vercel.app/",
    },
  },
  {
    fullName: "Okpani Margaret",
    role: "Product Designer, Design Lead",
    socials: {
      twitterLink: "https://twitter.com/m3garchi",
      linkedinLink: "https://www.linkedin.com/in/margaretokpani/",
      portfolioLink: "https://www.behance.net/search/projects/ ",
    },
  },
  {
    fullName: "Agu Henry",
    role: "Frontend Developer",
    socials: {
      twitterLink: "https://twitter.com/_henryi",
      linkedinLink: "https://www.linkedin.com/in/agu-henry-871a981b0",
      githubLink: "https://github.com/HenryAgu",
    },
  },
  {
    fullName: "Oghorodi Favour",
    role: "Frontend Developer",
    socials: {
      githubLink: "https://github.com/OGHENEMINE",
      twitterLink: "https://twitter.com/Oghorodi_mine",
      linkedinLink:
        "https://www.linkedin.com/mwlite/in/oghenemine-oghorodi-444446246",
    },
  },
  {
    fullName: "Bobby Osagie",
    role: "Product Designer",
    socials: {
      portfolioLink: "https://www.behance.net/osagiebobby",
      linkedinLink: "https://www.linkedin.com/in/bobby-osagie-3854aa253/",
    },
  },
  {
    fullName: "Ibiyeye Damilola",
    role: "Product Designer",
    socials: {
      twitterLink: "https://twitter.com/a_ibiyeye",
      linkedinLink:
        "https://www.linkedin.com/in/oluwadamilola-ibiyeye-884975247/",
      portfolioLink:
        "https://www.figma.com/file/G6WWiDR7q942T3cN9vRnSK/Bootcamp-Task?type=design&node-id=313%3A4964&t=qJOPXk8Lo0m5LYsA-1",
    },
  },
  {
    fullName: "Okesiji Abisola",
    role: "Product Designer",
    socials: {
      twitterLink: "https://twitter.com/taiwookesiji",
      linkedinLink: "https://www.linkedin.com/in/taiwo-a-okesiji-a4577355",
    },
  },
];
