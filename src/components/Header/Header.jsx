import { Fragment } from 'react';
import styles from './Header.module.css';

function Header({ nav, active }) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.wordmark}>
          Jhon Milo Nunez
        </a>
        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item, index) => (
            <Fragment key={item.id}>
              {index > 0 && (
                <span className={styles.sep} aria-hidden="true">
                  /
                </span>
              )}
              <a
                href={`#${item.id}`}
                className={`${styles.link} ${active === item.id ? styles.active : ''}`}
                aria-current={active === item.id ? 'true' : undefined}
              >
                <span className={styles.dot} aria-hidden="true" />
                {item.label}
              </a>
            </Fragment>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
