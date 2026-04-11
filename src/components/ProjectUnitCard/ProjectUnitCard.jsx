import styles from './ProjectUnitCard.module.css';

function ProjectUnitCard({ project, isSelected, onSelect }) {
  return (
    <button
      type="button"
      className={`${styles.card} ${styles[project.rarity]} ${
        isSelected ? styles.selected : ''
      }`}
      onClick={onSelect}
    >
      <div className={styles.artFrame} aria-hidden="true">
        <div className={styles.artGlow} />
        <span className={styles.costBadge}>{project.techStack.length}</span>
      </div>

      <div className={styles.info}>
        <div className={styles.header}>
          <span className={styles.rarity}>{project.rarity}</span>
          <span className={styles.idTag}>{project.id}</span>
        </div>
        <strong>{project.name}</strong>
        <p>{project.summary}</p>
        <div className={styles.stackPreview}>
          {project.techStack.slice(0, 3).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </button>
  );
}

export default ProjectUnitCard;
