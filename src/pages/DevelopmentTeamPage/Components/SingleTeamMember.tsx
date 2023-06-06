import styles from "../styles/SingleTeamMember.module.scss";
import LinkedInIcon from "../images/LinkedIn_icon.svg";
import TwitterIcon from "../images/Twitter_icon.svg";
import DribbleIcon from "../images/Dribble_icon.svg";
import githubIcon from "../images/github_icon.png";
import { Link } from "react-router-dom";

type social = {
  twitterLink?: string;
  portfolioLink?: string;
  linkedinLink?: string;
  githubLink?: string;
};

type SingleTeamMemberProp = {
  memberStack: string;
  memberName: string;
  memberSocials?: social;
  memberImage?: string;
};

const SingleTeamMember = ({
  memberStack,
  memberName,
  memberSocials,
  memberImage,
}: SingleTeamMemberProp) => {
  return (
    <>
      <div className={styles.SingleTeamMember}>
        <img src={memberImage} alt={`${memberName} photo`} />
        <div className={styles.attribution_container}>
          <div
            className={styles.attribution_card}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            {/* MEMBER NAME, ROLE, AND JOB DESC. CONTAINER */}
            <div className={styles.name_and_roles_container}>
              <p className={styles.person_name}>{memberName}</p>
              <p className={styles.person_role}>{memberStack}</p>
            </div>

            {/* SOCIAL ICONS CONTAINER */}
            <div
              className={styles.social_icons}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              {/* linkedinLink */}
              {memberSocials?.linkedinLink ? (
                <Link
                  to={memberSocials?.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={memberSocials?.linkedinLink}
                  className={styles.socialMedia_link}
                >
                  <img src={LinkedInIcon} alt={`linkedinLink Button`} />
                </Link>
              ) : (
                <></>
              )}

              {/* githubLink */}
              {memberSocials?.githubLink ? (
                <Link
                  to={memberSocials?.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={memberSocials?.githubLink}
                  className={styles.socialMedia_link}
                >
                  <img src={githubIcon} alt={`githubLink Button`} />
                </Link>
              ) : (
                <></>
              )}

              {/* portfolioLink */}
              {memberSocials?.portfolioLink ? (
                <Link
                  to={memberSocials?.portfolioLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={memberSocials?.portfolioLink}
                  className={styles.socialMedia_link}
                >
                  <img src={DribbleIcon} alt={`Dribble Button`} />
                </Link>
              ) : (
                <></>
              )}

              {/* twitterLink */}
              {memberSocials?.twitterLink ? (
                <Link
                  to={memberSocials?.twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={memberSocials?.twitterLink}
                  className={styles.socialMedia_link}
                >
                  <img src={TwitterIcon} alt={`twitterLink Button`} />
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTeamMember;
