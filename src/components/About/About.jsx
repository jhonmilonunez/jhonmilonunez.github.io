import styles from './About.module.css';
import TFTStatusCard from '../TFTStatusCard/TFTStatusCard';

const details = [
  {
    title: 'Education',
    body: 'B.S. Computer Science, Cybersecurity Track · Binghamton University (May 2026)',
    tone: 'accent',
    icon: <span className={styles.iconDiamond} />,
  },
  {
    title: 'Coursework',
    body: 'Java Design Patterns, OOP, Computer Networks, Science of Cybersecurity, Mobile Systems Security',
    tone: 'accent2',
    icon: (
      <span className={styles.iconLines}>
        <span />
        <span />
        <span />
      </span>
    ),
  },
  {
    title: 'Leadership',
    body: 'President ’25-26, Philippine-American League — led a 36-person board for a 300+ member org.',
    tone: 'accent',
    icon: (
      <span className={styles.iconDots}>
        <span />
        <span />
        <span />
      </span>
    ),
  },
  {
    title: 'When I’m not coding',
    body: 'Going to the gym, trying new recipes, climbing in TFT',
    tone: 'accent2',
    icon: <span className={styles.iconRing} />,
  },
];

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <aside className={styles.aside} data-reveal="">
          <div className={styles.portrait}>
            <img
              className={styles.portraitImg}
              src="/hero.jpg"
              alt="Jhon Milo Nunez standing outdoors"
            />
          </div>
          <TFTStatusCard />
        </aside>

        <div className={styles.main}>
          <div data-reveal="">
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span>a bit about me</span>
            </div>
            <h2 className={styles.heading}>building web apps with real use</h2>
            <p className={styles.lead}>
              as a cs grad with a passion for full-stack web dev, i&apos;ve focused my time on
              projects that people are able to use on a day to day basis. the most valuable aspect of
              my work is that it not only provides practicality, but also remains accessible to all.
            </p>
          </div>

          <div className={styles.cards}>
            {details.map((item, index) => (
              <div
                key={item.title}
                className={styles.card}
                data-reveal=""
                data-delay={index * 90}
              >
                <div
                  className={`${styles.iconBox} ${item.tone === 'accent' ? styles.iconAccent : styles.iconAccent2}`}
                >
                  {item.icon}
                </div>
                <div>
                  <div className={styles.cardTitle}>{item.title}</div>
                  <div className={styles.cardBody}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
