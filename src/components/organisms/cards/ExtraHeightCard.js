import VisibilityIcon from '@mui/icons-material/Visibility';

import './card.scss';
import {routes} from 'routes';
import {useLocation} from 'react-router-dom';
import Poster from '../../molecules/Poster/Poster';

export default function ExtraHeightCard({
  id,
  title,
  image,
  active,
  grayscale,
  ribbonType,
  number,
  ratings,
  extraHeight = 0,
}) {
  const location = useLocation();
  let route = null;
  if (location.pathname === routes.movies) route = routes.toMovie;
  if (location.pathname === routes.tvSeries) route = routes.toSerial;

  return (
    <div>
      <div className="simplePoster simplePoster__expectedCard">
        <Poster
          id={id}
          image={image}
          title={title}
          ribbonType={ribbonType}
          number={number}
          grayscale={grayscale}
          active={active}
        />

        <a
          href={`${route}${id}`}
          className="simplePoster__title"
          style={{padding: `${extraHeight}px`}}
        >
          <VisibilityIcon className="simplePoster__icon" />
          <h3 className="simplePoster__heading">{ratings}</h3>
        </a>
      </div>
      <span className="simplePoster__subtitle">{title}</span>
    </div>
  );
}
