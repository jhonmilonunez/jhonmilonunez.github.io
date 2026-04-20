import styles from './Dashboard.module.css';
import TFTStatusCard from '../TFTStatusCard/TFTStatusCard';

const quickLinks = [
  { label: 'GitHub'},
  { label: 'LinkedIn'},
  { label: 'Instagram'},
];

const statusPanels = [
  {
    title: 'Current Focus',
    body: 'Building polished full-stack projects that demonstrate a strong attention to user experience and security best practices. Actively seeking new grad opportunities in software engineering.',
  },
  {
    title: 'For Recruiters',
    body: 'I thrive in environments that value teamwork, creativity, and a room for growth. I am eager to contribute my skills and passion for software engineering to a dynamic team.',
  },
];

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <section className={styles.heroPanel}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Who Am I?</p>
          <h1>Jhon Milo Nunez</h1>
          <h2>Aspiring Software Engineer</h2>
          <p className={styles.summary}>
            I'm a soon-to-be graduate from Binghamton University's School of Computing,
            graduating with a B.S. in Computer Science on the Cybersecurity Track. My passion
            lies in building polished full-stack systems that not only prioritize user experince
            but also retain a high level of security.
          </p>
        </div>

        <div className={styles.featureCard}>
          <span className={styles.featureLabel}>Featured Project</span>
          <strong>Startup Signal</strong>
          <p>
            A Codex-assisted Python proof of concept for identifying promising startups using web scraping and natural language processing.
          </p>
          <div className={styles.featurePreview}>
            <img
              className={styles.featureGif}
              src="https://media1.tenor.com/m/b6JPIXTEaG0AAAAd/cats-aesthetic.gif"
              alt="Placeholder cat GIF"
            />
          </div>
        </div>
      </section>

      <section className={styles.lowerGrid}>
        <TFTStatusCard />

        {statusPanels.map((panel) => (
          <article key={panel.title} className={styles.infoCard}>
            <span className={styles.cardLabel}>{panel.title}</span>
            <p>{panel.body}</p>
          </article>
        ))}

        <article className={styles.activityCard}>
          <span className={styles.cardLabel}>Highlights</span>
          <ul>
            <li><strong>Technical Interests:</strong> Full-stack development, cybersecurity</li>
            <li><strong>Extracurriculars:</strong> President of the Philippine-American League (PAL) </li>
            <li><strong>Hobbies:</strong> Going to the gym, cooking new recipes, playing Teamfight Tactics</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default Dashboard;
