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
          <div className={
            styles.Metrics_Container
          }>
          {metricsContent.map(({number, title, desc}, index) => (
        <div key={index} className={styles.Metrics_NumberBox}>
            <p>{index !== 1? `${number}+` : number}</p>
            <p>{title}</p>
            <p>{desc}</p>
          </div>
          ))}
          </div>
          <img className={styles.Metrics_design_sm} src={MetricsDesignSm} alt="a background design"/>
          <img className={styles.Metrics_design_sm_two} src={MetricsDesignSmTwo} alt="a background design"/>
          <img className={styles.Metrics_design} src={MetricsDesign} alt="a background design"/>
          <img className={styles.Metrics_design_two} src={MetricsDesignTwo} alt="a background design"/>
      </section>
    </>
  );
};

export default AboutMetrics;
