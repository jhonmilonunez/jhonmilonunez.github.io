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
          <h1>Five clean card templates, one for each TFT-inspired cost tier.</h1>
        </div>
        <p className={styles.intro}>
          The old card system has been stripped out. This version focuses on a
          cleaner rarity ladder: common, uncommon, rare, epic, and legendary.
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
              {selectedProject.cost}-Cost {selectedProject.rarityLabel}
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
