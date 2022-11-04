import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import {useLocation, Link} from 'react-router-dom';

import {routes} from 'routes';
import SwiperSection from '../SwiperSection/SwiperSection';
import './trailers.scss';

function Trailers({data}) {
  if (!data) {
    return <div>Ładowanie...</div>;
  }

  const location = useLocation();
  let route = null;
  if (location.pathname === routes.movies) route = routes.toMovie;
  if (location.pathname === routes.tvSeries) route = routes.toSerial;

  return (
    <SwiperSection title="Zwiastuny" btnName="Zobacz wszystkie zwiastuny">
      <div className="trailers">
        <div className="trailers__items">
          <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            navigation
            modules={[Navigation]}
          >
            {data.map((item) => (
              <SwiperSlide className="trailers__items__item" key={item.id}>
                <div
                  style={{
                    backgroundImage: `url(${item.data().coverPhoto})`,
                  }}
                  className="item__poster"
                >
                  <div className="item__details">
                    <Link
                      to={`${route}${item.id}`}
                      className="item__details__title"
                    >
                      {item.data().title}
                    </Link>
                    <div className="item__details__year">
                      {item.data().year}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </SwiperSection>
  );
}

export default Trailers;
