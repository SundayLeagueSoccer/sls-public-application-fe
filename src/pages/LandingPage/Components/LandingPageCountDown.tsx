import styles from "../styles/LandingPageCountDown.module.scss";
import useApp from "../../../hooks/useApp";
import { useEffect, useState } from "react";

const LandingPageCountDown = () => {
  const { darkMode } = useApp();
  const [daysToMatch, SetDaysToMatch] = useState<string>("");
  const [hoursToMatch, SetHoursToMatch] = useState<string>("");
  const [minutesToMatch, setMinutesToMatch] = useState<string>("");
  const [secondsToMatch, setSecondsToMatch] = useState<string>("");

  const countdownTimer = () => {
    const currentTime = new Date();

    //day of week
    const dayOfWeek = currentTime.getDay();
    let daysToSunday: number;
    if (currentTime.getHours() > 15) {
      daysToSunday = 7 - dayOfWeek - 1;
    } else {
      daysToSunday = 7 - dayOfWeek;
    }
    SetDaysToMatch(daysToSunday.toString().padStart(2, "0"));

    //hour of day
    const hourOfDay = currentTime.getHours();
    let hoursToFourPm: number;
    if (currentTime.getHours() > 15) {
      hoursToFourPm = 24 - (currentTime.getHours() - 15);
    } else {
      hoursToFourPm = 15 - hourOfDay;
    }
    SetHoursToMatch(hoursToFourPm.toString().padStart(2, "0"));

    //hour of minutes
    const minuteOfDay = currentTime.getMinutes();
    const minutesToHour = 60 - minuteOfDay;
    setMinutesToMatch(minutesToHour.toString().padStart(2, "0"));

    //hour of seconds
    const secondOfDay = currentTime.getSeconds();
    const secondsToMinute = 60 - secondOfDay;
    setSecondsToMatch(secondsToMinute.toString().padStart(2, "0"));
  };

  useEffect(() => {
    setInterval(() => {
      countdownTimer();
    }, 1000);
  }, []);

  return (
    <>
      <section className={styles.LandingPageCountDown}>
        <div
          className={
            darkMode ? styles.top_container_dark : styles.top_container_light
          }
        >
          <h2>Next Match Day</h2>
          <div className={styles.figures_container}>
            <h5>{daysToMatch}</h5>
            <h5>{hoursToMatch}</h5>
            <h5>{minutesToMatch}</h5>
            <h5>{secondsToMatch}</h5>
          </div>
        </div>
        <div className={styles.bottom_container}>
          <h6>
            {+daysToMatch.charAt(daysToMatch.length - 1) < 2 ? "Day" : "Days"}
          </h6>
          <h6>
            {+hoursToMatch.charAt(hoursToMatch.length - 1) < 2
              ? "Hour"
              : "Hours"}
          </h6>
          <h6>
            {+minutesToMatch.charAt(minutesToMatch.length - 1) < 2
              ? "Min"
              : "Mins"}
          </h6>
          <h6>
            {+secondsToMatch.charAt(secondsToMatch.length - 1) < 2
              ? "Sec"
              : "Secs"}
          </h6>
        </div>
      </section>
    </>
  );
};

export default LandingPageCountDown;
