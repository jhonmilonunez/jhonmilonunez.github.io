import styles from './ResumePanel.module.css';

function ResumePanel() {
  return (
    <div className={styles.resumePage}>
      <section className={styles.headerCard}>
        <div>
          <p className={styles.eyebrow}>Resume</p>
          <h1>Professional snapshot ready for recruiter review.</h1>
        </div>
        <a href="#TODO-add-resume-download" className={styles.downloadButton}>
          Download Resume
        </a>
      </section>

      <section className={styles.grid}>
        <article className={styles.summaryCard}>
          <h2>Summary</h2>
          <p>
            TODO: Replace with a concise top-of-resume summary describing
            experience, strengths, and target role. Keep this aligned with the
            formal resume once it is finalized.
          </p>

          <div className={styles.experienceBlock}>
            <span className={styles.blockLabel}>Experience Snapshot</span>
            <p>
              TODO: Add one short paragraph summarizing internships, notable
              academic work, or relevant engineering experience.
            </p>
          </div>
        </article>

        <article className={styles.previewCard}>
          <span className={styles.blockLabel}>Resume Preview</span>
          <div className={styles.previewFrame}>TODO: Embed PDF or image preview here</div>
        </article>
      </section>
    </div>
  );
}

export default ResumePanel;
