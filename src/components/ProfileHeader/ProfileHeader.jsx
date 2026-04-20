import { useEffect, useMemo, useState } from 'react';
import styles from './ProfileHeader.module.css';

function ProfileHeader({ name, role, levelLabel, onOpenAbout }) {
  const aliases = useMemo(
    () => [name, 'Toe#spicy', 'jangmangnunu'],
    [name]
  );
  const [displayName, setDisplayName] = useState('');
  const [activeAliasIndex, setActiveAliasIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentAlias = aliases[activeAliasIndex];
    let timeoutMs = isDeleting ? 35 : 60;

    const timer = window.setTimeout(() => {
      if (!isDeleting && displayName === currentAlias) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayName.length === 0) {
        setIsDeleting(false);
        setActiveAliasIndex((currentIndex) => (currentIndex + 1) % aliases.length);
        return;
      }

      if (isDeleting) {
        setDisplayName(currentAlias.slice(0, displayName.length - 1));
      } else {
        setDisplayName(currentAlias.slice(0, displayName.length + 1));
      }
    }, timeoutMs);

    if (!isDeleting && displayName === currentAlias) {
      window.clearTimeout(timer);
      const holdTimer = window.setTimeout(() => {
        setIsDeleting(true);
      }, 900);

      return () => window.clearTimeout(holdTimer);
    }

    if (isDeleting && displayName.length === 0) {
      window.clearTimeout(timer);
      const nextAliasTimer = window.setTimeout(() => {
        setIsDeleting(false);
        setActiveAliasIndex((currentIndex) => (currentIndex + 1) % aliases.length);
      }, 160);

      return () => window.clearTimeout(nextAliasTimer);
    }

    return () => window.clearTimeout(timer);
  }, [activeAliasIndex, aliases, displayName, isDeleting]);

  return (
    <button type="button" className={styles.profileButton} onClick={onOpenAbout}>
      <div className={styles.identity}>
        <span className={styles.status}>Available for Software Roles</span>
        <strong className={styles.name}>
          <span>{displayName}</span>
          <span className={styles.caret} aria-hidden="true" />
        </strong>
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
