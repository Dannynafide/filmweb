import {useLocation} from 'react-router-dom';

import Poster from 'components/molecules/Poster/Poster';
import {routes} from 'routes';
import './card.scss';

export default function Card({
  id,
  title,
  secondTitle,
  image,
  active,
  grayscale,
  ribbonType,
  number,
}) {
  const location = useLocation();
  let route = null;
  if (location.pathname === routes.movies) route = routes.toMovie;
  if (location.pathname === routes.tvSeries) route = routes.toSerial;

  const bottomElement = secondTitle ? (
    <a
      href={`${route}${id}`}
      className="simplePoster__title simplePoster__secondtitle"
    >
      <h3 className="simplePoster__heading">{title}</h3>
      <h3 className="simplePoster__secondHeading">{secondTitle}</h3>
    </a>
  ) : (
    <a href={`${route}${id}`} className="simplePoster__title">
      <h3 className="simplePoster__heading">{title}</h3>
    </a>
  );

  return (
    <div className="simplePoster">
      <Poster
        id={id}
        image={image}
        title={title}
        ribbonType={ribbonType}
        number={number}
        grayscale={grayscale}
        active={active}
        link={`${route}${id}`}
      />

      {bottomElement}
    </div>
  );
}
