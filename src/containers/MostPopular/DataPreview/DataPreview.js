import StarRateIcon from '@mui/icons-material/StarRate';

// Imports from my application
import styles from './dataPreview.module.scss';

export default function DataPreview({item, short}) {
  return (
    <div className={styles.dataPreview}>
      <a className={styles.dataPreview__link} href="/">
        <h2 className={styles.dataPreview__title}>{item.data().title}</h2>
      </a>

      {!short && (
        <div className={styles.dataPreview__details}>
          <span className={styles.originalTitle}>
            {item.data().originalTitle}
          </span>
          <span className={styles.filmTime}>{item.data().filmTime}</span>
          <span>{item.data().year}</span>
        </div>
      )}

      <div className={styles.dataPreview__communityRatings}>
        <StarRateIcon className={styles.communityRatings__icon} />
        <span className={styles.communityRatings__value}>
          {item.data().ratings.value}
        </span>
        <span className={styles.communityRatings__ratingsNumber}>
          <span>{item.data().ratings.ratingsNumber}</span>
          <span>ocen społeczności</span>
        </span>
      </div>

      {!short && (
        <p className={styles.dataPreview__description}>
          {item.data().description}
        </p>
      )}
    </div>
  );
}
