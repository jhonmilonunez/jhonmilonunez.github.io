import styles from './ResumePanel.module.css';

function ResumePanel() {
  const resumePath = '/resume/Nunez_JhonMilo_resume_Apr2026.pdf';

  return (
    <div className={styles.resumePage}>
      <section className={styles.headerCard}>
        <div>
          <h1>Resume</h1>
        </div>
        <a href={resumePath} className={styles.downloadButton} download>
          Download Resume
        </a>
      </section>

      <section className={styles.grid}>
        <article className={styles.summaryCard}>
          <h2>Summary</h2>
          <p>
          Currently seeking solutions engineering positions. Expertise is backed by
          skills in fullstack development with best security practices in mind.
          </p>

          <div className={styles.experienceBlock}>
            <span className={styles.blockLabel}>Experience Snapshot</span>
            <p className={styles.courseworkTitle}>Relevant Coursework</p>
            <ul className={styles.experienceList}>
              <li>Data Structures and Algorithms</li>
              <li>Java Design Patterns</li>
              <li>Object-Oriented Programming</li>
            </ul>
          </div>
        </article>

        <article className={styles.previewCard}>
          <span className={styles.blockLabel}>Resume Preview</span>
          <div className={styles.previewFrame}>
            <iframe
              className={styles.resumeEmbed}
              src={resumePath}
              title="Jhon Milo Nunez Resume"
            />
          </div>
          <a
            href={resumePath}
            target="_blank"
            rel="noreferrer"
            className={styles.openButton}
          >
            Open In New Tab
          </a>
        </article>
      </section>
    </div>
  );
}

export default ResumePanel;
