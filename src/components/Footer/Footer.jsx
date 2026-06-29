import styles from './Footer.module.css';

const socials = [
  { label: 'GitHub', handle: 'jhonmilonunez', href: 'https://github.com/jhonmilonunez' },
  { label: 'LinkedIn', handle: 'jhon-milo-nunez', href: 'https://www.linkedin.com/in/jhon-milo-nunez' },
  { label: 'Instagram', handle: 'jhonmilonunez', href: 'https://www.instagram.com/jhonmilonunez' },
];

function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div data-reveal="">
          <h2 className={styles.heading}>nice to meet you</h2>
          <p className={styles.body}>
            i&apos;m currently looking for full-stack and new grad software roles. my dms and inbox
            are always open to talking about full-stack dev, tft, the gym, or anything at all.
          </p>
          <div className={styles.socials}>
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
              >
                <span className={styles.socialLabel}>{item.label}</span>
                <span className={styles.socialHandle}>{item.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
