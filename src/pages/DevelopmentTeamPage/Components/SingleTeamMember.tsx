import styles from "../styles/SingleTeamMember.module.scss";
import MargaretPhoto from "../images/Team_member_margaret.png";
import DamilolaPhoto from "../images/Team_member_damilola.png";
import TegaPhoto from "../images/Team_member_Tega.png";
import AbisolaPhoto from "../images/Team_member_abisola.png";
import LinkedInIcon from "../images/LinkedIn_icon.svg";
import TwitterIcon from "../images/Twitter_icon.svg";
import DribbleIcon from "../images/Dribble_icon.svg";
import { NavLink } from "react-router-dom";
import useApp from "../../../hooks/useApp";

type PhotoCardProp = {
  img: string;
  name: string;
  role: string;
  desc: string;
  index: number;
};

const PhotoCard = ({ img, name, role, desc, index }: PhotoCardProp) => {
  return (
    <div key={index} className={styles.photo_card}>
      <img src={img} alt="a person's photo" />
      <div className={styles.attribution_container}>
        <div className={styles.attribution_card}>
          <div>
            <p className={styles.person_name}>{name}</p>
            <p className={styles.person_role}>{role}</p>
            <p className={styles.person_desc}>{desc}</p>
          </div>

          <div className={styles.social_icons}>
            <img src={TwitterIcon} />
            <img src={LinkedInIcon} />
            <img src={DribbleIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};
const SingleTeamMember = () => {
  const { darkMode } = useApp();

  const TabBorderStyle = {
    borderBottomColor: darkMode ? "$test" : "#eaecf0",
  };

  const DevTeam = [
    {
      img: MargaretPhoto,
      name: "Margaret Okpani",
      role: "Product Designer",
      desc: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      img: TegaPhoto,
      name: "Oghenetega Esedere",
      role: "Frontend Engineer",
      desc: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    },
    {
      img: TegaPhoto,
      name: "Bobby Osagie",
      role: "Product Designer",
      desc: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    },
    {
      img: AbisolaPhoto,
      name: "Abisola Okesiji",
      role: "Product Designer",
      desc: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    },
    {
      img: DamilolaPhoto,
      name: "Damilola Ibiyeye",
      role: "Product Designer",
      desc: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    },
    {
      img: TegaPhoto,
      name: "Bobby Osagie",
      role: "Product Designer",
      desc: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    },
    {
      img: MargaretPhoto,
      name: "Margaret Okpani",
      role: "Product Designer",
      desc: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
      img: TegaPhoto,
      name: "Oghenetega Esedere",
      role: "Frontend Engineer",
      desc: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    },
    {
      img: TegaPhoto,
      name: "Bobby Osagie",
      role: "Product Designer",
      desc: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    },
  ];
  return (
    <>
      <div className={styles.SingleTeamMember}>
        <div className={styles.horizontal_tab} style={TabBorderStyle}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.not_active
            }
            to="/development-team"
          >
            Dev Team
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.not_active
            }
            to="/"
          >
            Designers
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.not_active
            }
            to="/"
          >
            Frontend
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.not_active
            }
            to="/"
          >
            Backend
          </NavLink>
        </div>

        <div className={styles.gallery_container}>
          {DevTeam.map(({ img, name, role, desc }, index) => (
            <PhotoCard index={index} img={img} name={name} role={role} desc={desc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleTeamMember;
