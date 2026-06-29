import styles from './Work.module.css';

const menyouStack = [
  'Java 17',
  'Jersey (JAX-RS)',
  'PostgreSQL',
  'React 18',
  'Docker',
  'Render',
];

function Work() {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.inner}>
        <div className={styles.intro} data-reveal="">
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span>Selected work</span>
          </div>
          <h2 className={styles.heading}>A few things I&apos;ve built.</h2>
        </div>

        <article className={`${styles.card} ${styles.featured}`} data-reveal="">
          <div className={styles.featuredGrid}>
            <div className={styles.previewLarge}>
              <div className={styles.previewTexture} aria-hidden="true" />
              <div className={styles.previewLabel}>
                <span>menYOU — app preview</span>
              </div>
            </div>
            <div className={styles.featuredBody}>
              <span className={styles.tagFeatured}>Featured project</span>
              <h3 className={styles.projectTitle}>menYOU</h3>
              <div className={styles.tags}>
                {menyouStack.map((tech, index) => (
                  <span
                    key={tech}
                    className={`${styles.tag} ${index % 2 === 0 ? styles.tagAccent : styles.tagAccent2}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className={styles.desc}>
                A full-stack, restaurant-first calorie-tracking web app I designed and built solo. A
                Jersey (JAX-RS) REST API on embedded Tomcat with HikariCP pooling, packaged as an
                executable fat JAR, backed by managed PostgreSQL with idempotent seeding across 1,401
                menu items from 7 national chains. Containerized with Docker and deployed to Render,
                serving a React 18 + Vite frontend with collapsible categories and multi-criteria
                filtering — covered by a 55-test JUnit 5 suite.
              </p>
              <div className={styles.links}>
                <a href="#" className={styles.link}>
                  Code →
                </a>
                <a
                  href="https://menyou.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Live →
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className={`${styles.card} ${styles.secondary}`} data-reveal="" data-delay="120">
          <div className={styles.secondaryGrid}>
            <div className={styles.previewSmall}>
              <div className={styles.previewTextureSage} aria-hidden="true" />
              <div className={styles.previewLabel}>
                <span>site preview</span>
              </div>
            </div>
            <div className={styles.secondaryBody}>
              <h3 className={styles.projectTitleSm}>This portfolio</h3>
              <div className={styles.urlLine}>jhonmilonunez.vercel.app</div>
              <div className={styles.tags}>
                <span className={`${styles.tag} ${styles.tagAccent2}`}>React</span>
                <span className={`${styles.tag} ${styles.tagAccent}`}>JavaScript</span>
                <span className={`${styles.tag} ${styles.tagAccent2}`}>Riot Games API</span>
              </div>
              <p className={styles.descSm}>
                A calm, responsive one-page portfolio that also pulls my live Teamfight Tactics rank
                from the Riot Games API — a small demo of consuming a third-party REST API with
                dynamic React rendering.
              </p>
              <div className={styles.links}>
                <a href="#" className={styles.link}>
                  Code →
                </a>
                <a
                  href="https://jhonmilonunez.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Live →
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Work;
