import {useLocation} from 'react-router-dom';

import Poster from 'components/molecules/Poster/Poster';
import {routes} from 'routes';
import './card.scss';

export default function ExpandedCard({
  id,
  title,
  secondTitle,
  image,
  ribbonType,
}) {
  const location = useLocation();
  let route = null;
  if (location.pathname === routes.movies) route = routes.toMovie;
  if (location.pathname === routes.tvSeries) route = routes.toSerial;

  return (
    <div className="simplePoster simplePoster__expandedCard">
      <Poster
        image={image}
        title={title}
        ribbonType={ribbonType}
        className="simplePoster__poster"
      />

      <a href={`${route}${id}`} className="simplePoster__title">
        <p className="simplePoster__heading">{title}</p>
      </a>
      <a href={`${route}${id}`} className="simplePoster__subtitle">
        <p>{secondTitle}</p>
      </a>
    </div>
  );
}
