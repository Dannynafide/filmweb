import {useState} from 'react';
import {useLocation, Link} from 'react-router-dom';

// Imports from my application
import Card from 'components/organisms/cards/Card';
import Swiper from 'components/organisms/Swiper/Swiper';
import useWindowSize from 'hooks/useWindowSize';
import breakpoints from 'styles/breakpoints.scss';
import {routes} from 'routes';
import DataPreview from './DataPreview/DataPreview';
import './mostPopular.scss';

export default function MostPopular({pageTitle, subtitle, data}) {
  const [activeItem, setActiveItem] = useState(data[0]);
  const [delayHandler, setDelayHandler] = useState(null);
  const width = useWindowSize()[0]; // szerokość przeglądarki
  const tabletAndUp = parseInt(breakpoints.tabletAndUp, 10);
  const desktopAndUp = parseInt(breakpoints.desktopAndUp, 10);

  // Podmiana na aktywne tło
  const handleMouseEnter = (item) => {
    setDelayHandler(
      setTimeout(() => {
        setActiveItem(item);
      }, 500)
    );
  };

  const handleMouseLeave = () => {
    clearTimeout(delayHandler);
  };

  const desktopDataPreview = width >= desktopAndUp && (
    <DataPreview item={activeItem} />
  );
  const mobileDataPreview = width < desktopAndUp && (
    <DataPreview item={activeItem} short={width < tabletAndUp} />
  );

  const location = useLocation();
  let route = null;
  if (location.pathname === routes.movies) route = routes.toMovie;
  if (location.pathname === routes.tvSeries) route = routes.toSerial;

  return (
    <section>
      <div className="mostPopular">
        <div className="mostPopular__pageTop">
          <h1 className="mostPopular__pageTop__title">{pageTitle}</h1>
          <p className="mostPopular__pageTop__subtitle">{subtitle}</p>
        </div>

        <div className="mostPopular__content">
          {desktopDataPreview}

          <Link
            className="wrapperPlayBtn"
            to={`${route}${activeItem.id}`}
            aria-hidden="true"
          >
            <div className="wrapperPlayBtn__icon" />
          </Link>
          {mobileDataPreview}
        </div>

        <div
          className="mostPopular__coverPhoto"
          style={{
            backgroundImage: `url(${activeItem.data().coverPhoto})`,
          }}
        />
      </div>

      <div className="wrapperCards">
        <div className="cards">
          <Swiper>
            {data.map((item) => {
              const active = item.id === activeItem.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Card
                    id={item.id}
                    ribbonType="protruding"
                    active={active}
                    grayscale={!active}
                    title={item.data().title}
                    image={item.data().image}
                  />
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
