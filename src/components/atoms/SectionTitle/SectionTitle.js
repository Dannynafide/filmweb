import styles from './sectionTitle.module.scss';

export default function SectionTitle({children, className}) {
  return <h3 className={`${styles.title} ${className}`}>{children}</h3>;
}
