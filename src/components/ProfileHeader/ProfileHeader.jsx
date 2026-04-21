import { useEffect, useMemo, useState } from 'react';
import styles from './ProfileHeader.module.css';

function ProfileHeader({ name, role, levelLabel, onOpenAbout }) {
  const aliases = useMemo(
    () => [name, 'Toe#spicy', 'jangmangnunu'],
    [name]
  );
  const [displayName, setDisplayName] = useState(() => name.slice(0, 1));
  const [activeAliasIndex, setActiveAliasIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAliasPause, setIsAliasPause] = useState(false);

  useEffect(() => {
    const currentAlias = aliases[activeAliasIndex];
    const timeoutMs = isAliasPause ? 180 : isDeleting ? 35 : 60;

    const timer = window.setTimeout(() => {
      if (isAliasPause) {
        setIsAliasPause(false);
        return;
      }

      if (!isDeleting && displayName === currentAlias) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayName.length <= 1) {
        const nextAliasIndex = (activeAliasIndex + 1) % aliases.length;
        const nextAlias = aliases[nextAliasIndex];
        setIsDeleting(false);
        setActiveAliasIndex(nextAliasIndex);
        setDisplayName(nextAlias.slice(0, 1));
        setIsAliasPause(true);
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

    return () => window.clearTimeout(timer);
  }, [activeAliasIndex, aliases, displayName, isAliasPause, isDeleting]);

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
