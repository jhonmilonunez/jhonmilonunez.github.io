import styles from './ProfileHeader.module.css';

function ProfileHeader({ name, role, levelLabel, onOpenAbout }) {
  return (
    <button type="button" className={styles.profileButton} onClick={onOpenAbout}>
      <div className={styles.identity}>
        <span className={styles.status}>Available for Software Roles</span>
        <strong className={styles.name}>{name}</strong>
        <span className={styles.role}>{role}</span>
      </div>

      <div className={styles.levelBadge}>
        <span className={styles.levelLabel}>{levelLabel}</span>
        <span className={styles.levelValue}>LVL 21</span>
      </div>
    </button>
  );
}

export default ProfileHeader;
