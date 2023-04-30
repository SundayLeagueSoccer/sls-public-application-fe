import styles from "../styles/AboutMetrics.module.scss";

const AboutMetrics = () => {
  const metricsContent = [
    {number: '100', title: 'matches played', desc: "We’ve played lots of matches in different weathers"},
    {number: '50', title: 'active players', desc: "We’ve a system wherein players get to play and connect"},
    {number: '05', title: 'players award', desc: "We’ve awarded several players on their outstanding performance."}
  ]
  return (
    <>
      <section className={styles.AboutMetrics}>
      {metricsContent.map(({number, title, desc}, index) => (
          <div key={index} className={styles.Metrics_NumberBox}>
            <p>{index !== 1? `${number}+` : number}</p>
            <p>{title}</p>
            <p>{desc}</p>
          </div>
          ))}
      </section>
    </>
  );
};

export default AboutMetrics;
