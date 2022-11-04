/* eslint-disable import/no-unresolved */
import React, {useEffect, useState} from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// Imports from my application
import './swiper.scss';

export default function SwiperComponent({
  children,
  buttonsHeight = '30%',
  size,
}) {
  const swiperRef = React.useRef(null);
  const [previousBtnDisabled, setPreviousBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const swiperBreakpoints = {
    768: {
      slidesPerView: size || 4.5,
      slidesPerGroup: size - 1 || 3.5,
    },
    1152: {
      slidesPerView: size || 6,
      slidesPerGroup: size - 1 || 5,
    },
  };

  useEffect(() => {
    if (children.length === size) {
      setPreviousBtnDisabled(true);
      setNextBtnDisabled(true);
    }
  }, [children, size]);

  return (
    <div className="swiper">
      <button
        type="button"
        className="swiper__previousButton"
        onClick={() => swiperRef.current.swiper.slidePrev()}
        style={{top: buttonsHeight}}
        disabled={previousBtnDisabled}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </button>

      <Swiper
        ref={swiperRef}
        slidesPerView="auto"
        spaceBetween={30}
        loop={false}
        breakpoints={swiperBreakpoints}
        onSlideChange={(swiper) => {
          if (swiper.isBeginning) {
            setPreviousBtnDisabled(true);
          } else {
            setPreviousBtnDisabled(false);
          }

          if (swiper.isEnd) {
            setNextBtnDisabled(true);
          } else {
            setNextBtnDisabled(false);
          }
        }}
      >
        {children.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide className="swiper__slides" key={index}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        className="swiper__nextButton"
        onClick={() => swiperRef.current.swiper.slideNext()}
        style={{top: buttonsHeight}}
        disabled={nextBtnDisabled}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </button>
    </div>
  );
}
