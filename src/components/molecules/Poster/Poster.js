import useAuth from 'context/useAuth';
import useUser from 'context/useUser';

import Ribbon from 'components/atoms/Ribbon/Ribbon';
import styles from './poster.module.scss';

export default function Poster({
  id,
  image,
  title,
  ribbonType, // basic, protruding
  number, // 1, 2, 3...
  grayscale, // true, false
  active, // false, true
  className, // add to ".poster"
  link,
}) {
  const {user} = useAuth();
  const {userData, updateFavorites} = useUser();
  const isFavorite = userData?.favorites?.movies.includes(id);

  const ribbonEL = ribbonType && (
    <Ribbon
      active={isFavorite}
      type={ribbonType}
      onClick={() => updateFavorites(user, id, !isFavorite)}
    />
  );

  const numberEl = Number.isInteger(number) && (
    <div className={styles.number}>{number}</div>
  );

  const newClass = `${styles.poster} ${className} ${
    active && styles.posterActive
  }`;

  return (
    <div className={newClass}>
      <a
        href={link}
        className={`${styles.zoomIn} ${grayscale && styles.grayscale}`}
      >
        <figure>
          <img src={image} alt={title} />
        </figure>
      </a>

      {ribbonEL}
      {numberEl}
    </div>
  );
}
