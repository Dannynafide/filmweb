import styles from './button.module.scss';

// children - string
// dark - true or false
export default function SectionBtn({children, dark, className}) {
  const addClass = dark && styles.button__dark;

  return (
    <button
      type="button"
      className={`${styles.button} ${addClass} ${className}`}
    >
      {children}
    </button>
  );
}
