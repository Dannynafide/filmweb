import styles from './button.module.scss';

// children - string
// dark - true or false
export default function SectionBtn({dark, children, className}) {
  const blackButton = dark && styles.dark;

  return (
    <button
      type="button"
      className={`${styles.basic} ${blackButton} ${className}`}
    >
      {children}
    </button>
  );
}
