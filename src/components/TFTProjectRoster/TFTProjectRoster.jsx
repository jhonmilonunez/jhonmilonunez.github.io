import { useEffect, useState } from 'react';
import ProjectUnitCard from '../ProjectUnitCard/ProjectUnitCard';
import styles from './TFTProjectRoster.module.css';

function TFTProjectRoster({ projects }) {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id ?? null);

  useEffect(() => {
    if (!projects.some((project) => project.id === selectedProjectId)) {
      setSelectedProjectId(projects[0]?.id ?? null);
    }
  }, [projects, selectedProjectId]);

  const selectedProject =
    projects.find((project) => project.id === selectedProjectId) ?? projects[0];

  return (
    <div className={styles.rosterPage}>
      <section className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Project Roster</p>
          <h1>Selected work presented as a polished client-side shop row.</h1>
        </div>
        <p className={styles.intro}>
          Each card uses rarity, density, and selection state to echo TFT shop
          rhythm while still keeping the portfolio readable for recruiters.
        </p>
      </section>

      <section className={styles.shopPanel}>
        <div className={styles.shopHeader}>
          <span className={styles.shopBadge}>Projects</span>
          <span className={styles.shopMeta}>{projects.length} available</span>
        </div>

        <div className={styles.unitGrid} role="list" aria-label="Projects">
          {projects.map((project) => (
            <ProjectUnitCard
              key={project.id}
              project={project}
              isSelected={project.id === selectedProjectId}
              onSelect={() => setSelectedProjectId(project.id)}
            />
          ))}
        </div>
      </section>

      {selectedProject && (
        <aside className={styles.detailPanel}>
          <div className={styles.detailHeader}>
            <div>
              <p className={styles.eyebrow}>Project Detail</p>
              <h2>{selectedProject.name}</h2>
            </div>
            <span
              className={`${styles.rarityBadge} ${styles[selectedProject.rarity]}`}
            >
              {selectedProject.rarity}
            </span>
          </div>

          <div className={styles.detailGrid}>
            <div className={styles.primaryColumn}>
              <p className={styles.summary}>{selectedProject.summary}</p>

              <div className={styles.linkRow}>
                <a href={selectedProject.githubUrl}>GitHub</a>
                <a href={selectedProject.demoUrl}>Live Demo</a>
              </div>

              <div className={styles.metaSection}>
                <h3>Technical Highlights</h3>
                <ul>
                  {selectedProject.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.secondaryColumn}>
              <div className={styles.screenshot}>
                {selectedProject.screenshotLabel}
              </div>

              <div className={styles.metaSection}>
                <h3>Tech Stack</h3>
                <div className={styles.techList}>
                  {selectedProject.techStack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}

export default TFTProjectRoster;
