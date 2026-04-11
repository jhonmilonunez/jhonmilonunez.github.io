import styles from './ClientFrame.module.css';

function ClientFrame({ topNav, profileHeader, rightRail, aboutPanel, children }) {
  return (
    <div className={styles.appShell}>
      <div className={styles.backdrop} />
      <div className={styles.clientSurface}>
        <header className={styles.topBar}>
          <div className={styles.navSlot}>{topNav}</div>
          <div className={styles.profileSlot}>{profileHeader}</div>
        </header>

        <div className={styles.bodyFrame}>
          <main className={styles.mainPanel}>{children}</main>
          <aside className={styles.rightRail}>{rightRail}</aside>
        </div>
      </div>
      {aboutPanel}
    </div>
  );
}

export default ClientFrame;
