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
      <div className={styles.info}>
        <div className={styles.topContent}>
          <div className={styles.header}>
            <span className={styles.rarity}>{project.rarityLabel}</span>
            <span className={styles.idTag}>{project.cost}-Cost</span>
          </div>
          <strong>{project.name}</strong>
          <p>{project.summary}</p>
        </div>

        <div className={styles.stackPreview}>
          {project.techStack.slice(0, 3).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <span className={styles.costBadge}>{project.cost}</span>
    </button>
  );
}

export default ProjectUnitCard;
