import styles from './AboutPanel.module.css';

function AboutPanel({ isOpen, onClose }) {
  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={styles.scrim}
        onClick={onClose}
        aria-label="Close About Me panel"
        tabIndex={isOpen ? 0 : -1}
      />

      <aside className={styles.panel} aria-label="About Me">
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Profile Overview</p>
            <h2>About Me</h2>
          </div>
          <button type="button" className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>

        <div className={styles.headshot}>
          <span>TODO: Replace with headshot</span>
        </div>

        <div className={styles.block}>
          <h3>Professional Bio</h3>
          <p>
            Early-career software engineer with a focus on building polished,
            maintainable products. TODO: Replace this placeholder with a concise
            recruiter-facing summary that highlights strengths, interests, and
            work style.
          </p>
        </div>

        <div className={styles.metaGrid}>
          <div className={styles.metaCard}>
            <span className={styles.metaLabel}>School / Program</span>
            <strong>TODO: Add school or degree</strong>
          </div>
          <div className={styles.metaCard}>
            <span className={styles.metaLabel}>Current Focus</span>
            <strong>Frontend systems and full-stack product work</strong>
          </div>
          <div className={styles.metaCard}>
            <span className={styles.metaLabel}>Role Target</span>
            <strong>Software Engineer / Frontend Engineer</strong>
          </div>
        </div>

        <div className={styles.block}>
          <h3>Contact</h3>
          <div className={styles.links}>
            <a href="#TODO-add-github">GitHub</a>
            <a href="#TODO-add-linkedin">LinkedIn</a>
            <a href="mailto:TODO@example.com">Email</a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default AboutPanel;
