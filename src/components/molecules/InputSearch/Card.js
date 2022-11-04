import {Link} from 'react-router-dom';
import {routes} from 'routes';
import styles from './card.module.scss';

function Card({item}) {
  let route = null;
  if (item.category === 'movies') route = routes.toMovie;
  if (item.category === 'tvSeries') route = routes.toSerial;

  return (
    <Link to={`${route}${item.id}`} className={styles.card} replace>
      <img className={styles.image} alt={item.title} src={item.image} />
      <div>
        <b>{item.title}</b>
        <br />
        {item.originalTitle}
        <br />
      </div>
    </Link>
  );
}

export default Card;
