import styles from "./DevelopmentTeamPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import DevelopmentTeamHeader from "./Components/DevelopmentTeamHeader";
import SingleTeamMember from "./Components/SingleTeamMember";
import useApp from "../../hooks/useApp";
import { developmentTeam } from "./assets/developmentTeam";

//photos
import MargaretPhoto from "./images/memberImages/Team_member_margaret.png";
import TegaPhoto from "./images/memberImages/Team_member_Tega.png";
import HenryPhoto from "./images/memberImages/Team_member_henry.png";
import OsagiePhoto from "./images/memberImages/Team_Member_Osagie.png";
import DammyPhoto from "./images/memberImages/Team_member_damilola.png";
import OkesijiPhoto from "./images/memberImages/Team_member_abisola.png";
import FavourPhoto from "./images/memberImages/Team member_favour.png";

const DevelopmentTeamPage = () => {
  const { darkMode } = useApp();
  const memberImages = [
    TegaPhoto,
    MargaretPhoto,
    HenryPhoto,
    FavourPhoto,
    OsagiePhoto,
    DammyPhoto,
    OkesijiPhoto,
  ];

  const getYear = () => {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return `© ${currentYear} Sls. All rights reserved.`;
  };

  return (
    <>
      <AnimatedFadeInPage>
        <div className={darkMode ? styles.Dark : styles.Light}>
          <main className={styles.DevelopmentTeamPage}>
            <div className={styles.page_container}>
              <DevelopmentTeamHeader />
              <section className={styles.dev_team_section}>
                {/* row one */}
                <div className={styles.row_one}>
                  {/* Tega */}
                  <SingleTeamMember
                    memberName={developmentTeam[0].fullName}
                    memberStack={developmentTeam[0].role}
                    memberSocials={developmentTeam[0].socials}
                    memberImage={memberImages[0]}
                  />
                  {/* Margaret */}
                  <SingleTeamMember
                    memberName={developmentTeam[1].fullName}
                    memberStack={developmentTeam[1].role}
                    memberSocials={developmentTeam[1].socials}
                    memberImage={memberImages[1]}
                  />
                </div>

                {/* row two */}
                {/* for mobile and for desktop */}
                <div className={styles.row_two}>
                  {/* Agu Henry */}
                  <SingleTeamMember
                    memberName={developmentTeam[2].fullName}
                    memberStack={developmentTeam[2].role}
                    memberSocials={developmentTeam[2].socials}
                    memberImage={memberImages[2]}
                  />
                  {/* Mine */}
                  <SingleTeamMember
                    memberName={developmentTeam[3].fullName}
                    memberStack={developmentTeam[3].role}
                    memberSocials={developmentTeam[3].socials}
                    memberImage={memberImages[3]}
                  />
                  {/* Bobby Osagie */}
                  <SingleTeamMember
                    memberName={developmentTeam[4].fullName}
                    memberStack={developmentTeam[4].role}
                    memberSocials={developmentTeam[4].socials}
                    memberImage={memberImages[4]}
                  />
                </div>

                {/* row three */}
                <div className={styles.row_three}>
                  {/* Damilola Ibiyeye */}
                  <SingleTeamMember
                    memberName={developmentTeam[5].fullName}
                    memberStack={developmentTeam[5].role}
                    memberSocials={developmentTeam[5].socials}
                    memberImage={memberImages[5]}
                  />
                  {/* Okesiji Tyron */}
                  <SingleTeamMember
                    memberName={developmentTeam[6].fullName}
                    memberStack={developmentTeam[6].role}
                    memberSocials={developmentTeam[6].socials}
                    memberImage={memberImages[6]}
                  />
                </div>

                {/* last row */}
                {/* for tablets */}
                <div className={styles.last_row_tablet_only}>
                  <div className={styles.mid_row_tablet_only}>
                    {/* Agu Henry */}
                    <SingleTeamMember
                      memberName={developmentTeam[2].fullName}
                      memberStack={developmentTeam[2].role}
                      memberSocials={developmentTeam[2].socials}
                      memberImage={memberImages[2]}
                    />
                    {/* Mine */}
                    <SingleTeamMember
                      memberName={developmentTeam[3].fullName}
                      memberStack={developmentTeam[3].role}
                      memberSocials={developmentTeam[3].socials}
                      memberImage={memberImages[3]}
                    />
                  </div>

                  <div className={styles.mid_row_tablet_only}>
                    {/* Bobby Osagie */}
                    <SingleTeamMember
                      memberName={developmentTeam[4].fullName}
                      memberStack={developmentTeam[4].role}
                      memberSocials={developmentTeam[4].socials}
                      memberImage={memberImages[4]}
                    />
                  </div>
                </div>

                <footer>
                  <h5>{getYear()}</h5>
                </footer>
              </section>
            </div>
          </main>
        </div>
      </AnimatedFadeInPage>
    </>
  );
};

export default DevelopmentTeamPage;
