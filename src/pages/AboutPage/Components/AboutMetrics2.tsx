import styles from "../styles/AboutMetrics2.module.scss";

type MetricSectionDetailCardProp = {
  mainText: string;
  secondaryText: string;
  tertiaryText: string;
};

const MetricSectionDetailCard = ({
  mainText,
  secondaryText,
  tertiaryText,
}: MetricSectionDetailCardProp) => {
  return (
    <div className={styles.Metric_detail_card}>
      <h2>{mainText}</h2>
      <div className={styles.subText_container}>
        <h5>{secondaryText}</h5>
        <p>{tertiaryText}</p>
      </div>
    </div>
  );
};

const AboutMetrics2 = () => {
  const cardDetailsData = [
    {
      mainText: "100+",
      secondaryText: "Matches Played",
      tertiaryText: "We’ve played lots of matches in different weathers.",
    },
    {
      mainText: "50",
      secondaryText: "Active Players",
      tertiaryText: "We’ve  a system wherein players get to play and connect.",
    },
    {
      mainText: "05+",
      secondaryText: "Players Awarded",
      tertiaryText:
        "We’ve awarded several players on their outstanding performance.",
    },
  ];

  return (
    <>
      <section className={styles.AboutMetrics2}>
        <div className={styles.image_Card}>
          {cardDetailsData.map((cardData) => {
            return (
              <MetricSectionDetailCard
                key={cardData.mainText}
                mainText={cardData.mainText}
                secondaryText={cardData.secondaryText}
                tertiaryText={cardData.tertiaryText}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AboutMetrics2;
