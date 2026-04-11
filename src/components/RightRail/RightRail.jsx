import styles from './RightRail.module.css';

const contacts = [
  { label: 'Contact Slot 01', status: 'Available' },
  { label: 'Contact Slot 02', status: 'Placeholder' },
  { label: 'Contact Slot 03', status: 'Placeholder' },
  { label: 'Contact Slot 04', status: 'Placeholder' },
  { label: 'Contact Slot 05', status: 'Placeholder' },
];

function RightRail() {
  return (
    <div className={styles.rail}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Network</span>
        <h2>Connections</h2>
      </div>

      <div className={styles.quickActions}>
        <button type="button">Message</button>
        <button type="button">Schedule</button>
      </div>

      <div className={styles.list}>
        {contacts.map((contact) => (
          <button key={contact.label} type="button" className={styles.contact}>
            <span className={styles.avatar} />
            <span className={styles.copy}>
              <strong>{contact.label}</strong>
              <span>{contact.status}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default RightRail;
