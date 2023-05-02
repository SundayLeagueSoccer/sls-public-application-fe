import styles from "../styles/LandingPageCountDown.module.scss";
import useApp from "../../../hooks/useApp";
import { useEffect, useState } from "react";

const LandingPageCountDown = () => {
  const { darkMode } = useApp();
  const [daysToMatch, SetDaysToMatch] = useState<string>();
  const [hoursToMatch, SetHoursToMatch] = useState<string>();
  const [minutesToMatch, setMinutesToMatch] = useState<string>();
  const [secondsToMatch, setSecondsToMatch] = useState<string>();

  const countdownTimer = () => {
    const currentTime = new Date();

    //day of week
    const dayOfWeek = currentTime.getDay();
    const daysToSunday = 7 - dayOfWeek;
    SetDaysToMatch(daysToSunday.toString().padStart(2, "0"));

    //hour of day
    const hourOfDay = currentTime.getHours();
    const hoursToFourPm = 15 - hourOfDay;
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
          <h6>Days</h6>
          <h6>Hours</h6>
          <h6>Mins</h6>
          <h6>Secs</h6>
        </div>
      </section>
    </>
  );
};

export default LandingPageCountDown;
