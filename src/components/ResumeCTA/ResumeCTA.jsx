import styles from './ResumeCTA.module.css';

const RESUME_PATH = '/resume/Nunez_JhonMilo_resume_June2026.pdf';

function ResumeCTA() {
  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.row} data-reveal="">
          <div className={styles.copy}>
            <h2 className={styles.heading}>my resume</h2>
            <p className={styles.body}>
              for all the details and nuances behind my projects, condensed into a single page
            </p>
            <a href={RESUME_PATH} download className={styles.button}>
              Download resume
            </a>
          </div>

          <div className={styles.preview}>
            <iframe
              className={styles.frame}
              src={`${RESUME_PATH}#view=FitH&toolbar=0`}
              title="Jhon Milo Nunez resume preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeCTA;
