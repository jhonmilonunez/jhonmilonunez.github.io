import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy} data-reveal="">
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>based in nyc</span>
          </div>
          <h1 className={styles.title}>hey, i&apos;m jhon</h1>
          <p className={styles.lead}>java &amp; full-stack dev</p>
          <p className={styles.body}>
            cs graduate from binghamton university (cybersecurity track). i&apos;ve built web
            applications end to end, from REST APIs and PostgreSQL to their React frontends, all
            while making sure that standards of quality are met.
          </p>
          <div className={styles.actions}>
            <a href="#work" className={styles.primary}>
              See my work
            </a>
            <a
              href="/resume/Nunez_JhonMilo_resume_June2026.pdf"
              download
              className={styles.secondary}
            >
              Download resume
            </a>
          </div>
        </div>

        <div className={styles.portraitWrap} data-reveal="">
          <div className={styles.portraitGlow} aria-hidden="true" />
          <div className={styles.portrait}>
            <img
              className={styles.portraitImg}
              src="/hero2.jpg"
              alt="Jhon Milo Nunez at graduation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
