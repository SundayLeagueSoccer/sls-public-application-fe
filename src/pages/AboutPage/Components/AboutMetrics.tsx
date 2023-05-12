import styles from "../styles/AboutMetrics.module.scss";
import MetricsDesign from '../images/MetricsDesign.png'
import MetricsDesignSm from '../images/MetricDesignSm.png'
import MetricsDesignSmTwo from '../images/MetricDesignSm(2).png'
import MetricsDesignTwo from '../images/MetricDesign(2).png'

const AboutMetrics = () => {
  const metricsContent = [
    {number: '100', title: 'matches played', desc: "We’ve played lots of matches in different weathers"},
    {number: '50', title: 'active players', desc: "We’ve a system wherein players get to play and connect"},
    {number: '05', title: 'players award', desc: "We’ve awarded several players on their outstanding performance."}
  ]
  return (
    <>
      <section className={styles.AboutMetrics}>
         <div className={styles.container}>
         {metricsContent.map(({number, title, desc}, index) => (
          <div key={index} className={styles.Metrics_NumberBox}>
            <p className={styles.number}>{index !== 1? `${number}+` : number}</p>
            <p className={styles.title}>{title}</p>
            <p className={styles.desc}>{desc}</p>
          </div>
          ))}
         </div>
      </section>
    </>
  );
};

export default AboutMetrics;
