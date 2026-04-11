import styles from './TopNav.module.css';

function TopNav({ tabs, activeTab, onTabChange }) {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.tabStrip}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default TopNav;
