import styles from './Dashboard.module.css';

const quickLinks = [
  { label: 'GitHub', href: '#TODO-add-github' },
  { label: 'LinkedIn', href: '#TODO-add-linkedin' },
  { label: 'Resume', href: '#TODO-add-resume-link' },
];

const statusPanels = [
  {
    title: 'Current Focus',
    body: 'Building polished front-end systems, leveling up product thinking, and shipping work that is easy for teams to maintain.',
  },
  {
    title: 'What Recruiters Should Know',
    body: 'TODO: Replace this block with a concise value statement about engineering strengths, collaboration style, and target opportunities.',
  },
];

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <section className={styles.heroPanel}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Profile Dashboard</p>
          <h1>Jhon Milonunez</h1>
          <h2>Software Engineer crafting polished product experiences.</h2>
          <p className={styles.summary}>
            TODO: Replace with a recruiter-friendly summary that quickly explains
            experience level, technical strengths, and the kind of teams or
            problems you want to work on.
          </p>

          <div className={styles.quickLinks}>
            {quickLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.quickLink}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.featureCard}>
          <span className={styles.featureLabel}>Featured Project</span>
          <strong>Signal Stack</strong>
          <p>
            A production-minded observability platform concept showing full-stack
            depth, system thinking, and UI polish.
          </p>
          <div className={styles.featurePreview}>TODO: Replace with featured screenshot</div>
        </div>
      </section>

      <section className={styles.lowerGrid}>
        {statusPanels.map((panel) => (
          <article key={panel.title} className={styles.infoCard}>
            <span className={styles.cardLabel}>{panel.title}</span>
            <p>{panel.body}</p>
          </article>
        ))}

        <article className={styles.activityCard}>
          <span className={styles.cardLabel}>Highlights</span>
          <ul>
            <li>TODO: Add strongest internship, project, or academic milestone.</li>
            <li>TODO: Add strongest technical achievement with measurable impact.</li>
            <li>TODO: Add preferred engineering areas or domains of interest.</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default Dashboard;
