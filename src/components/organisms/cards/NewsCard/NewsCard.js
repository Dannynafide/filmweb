import Poster from 'components/molecules/Poster/Poster';
import styles from './newsCard.module.scss';

export default function NewsCard({image, category, title, date}) {
  return (
    <div className={styles.newsCard}>
      <Poster image={image} title={title} className={styles.poster} />
      <div className={styles.details}>
        <span className={styles.details__category}>{category}</span>
        <span>{title}</span>
        <span className={styles.details__date}>{date}</span>
      </div>
    </div>
  );
}
