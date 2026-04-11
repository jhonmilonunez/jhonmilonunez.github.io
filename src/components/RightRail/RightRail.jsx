import styles from './RightRail.module.css';

const railLinks = [
  { label: 'GitHub', status: 'Online', href: 'https://github.com/jhonmilonunez' },
  { label: 'LinkedIn', status: 'Online', href: 'https://www.linkedin.com/in/jhon-milo-nunez' },
  { label: 'Instagram', status: 'Online', href: 'https://www.instagram.com/jhonmilonunez' },
];

function RightRail() {
  return (
    <div className={styles.rail}>
      <div className={styles.header}>
        <h2>Links</h2>
      </div>

      <div className={styles.list}>
        {railLinks.map((item) => (
          <a key={item.label} href={item.href} className={styles.contact}  target="_blank">
            <span className={styles.avatar} />
            <span className={styles.copy}>
              <strong>{item.label}</strong>
              <span>{item.status}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default RightRail;
