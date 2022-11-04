import MainTemplate from 'template/MainTemplate/MainTemplate';
import useDatabase from 'context/useDatabase';
import MostPopular from '../containers/MostPopular/MostPopular';
import SwiperSection from '../containers/SwiperSection/SwiperSection';
import Swiper from '../components/organisms/Swiper/Swiper';
import ExtraHeightCard from '../components/organisms/cards/ExtraHeightCard';
import Trailers from '../containers/Trailers/Trailers';
import Advertisement from '../containers/Advertisement/Advertisement';
import ExpandedCard from '../components/organisms/cards/ExpandedCard';
import News from '../containers/News/News';

export default function TVSeries() {
  const {tvSeries, actors} = useDatabase();

  return (
    <MainTemplate>
      {tvSeries && (
        <MostPopular
          pageTitle="Seriale"
          subtitle="najpopularniejsze"
          data={tvSeries}
        />
      )}

      {tvSeries && (
        <SwiperSection
          titlePrefix="TOP DNIA:"
          title="Filmy na VOD"
          btnName="Sprawdź, co obejrzeć na VOD"
          data={tvSeries}
          ribbonType="basic"
        />
      )}

      {actors && (
        <SwiperSection
          light
          title="Ranking nowości"
          btnName="Zobacz pełny ranking"
        >
          <Swiper>
            {actors.map((item, index) => (
              <ExtraHeightCard
                id={item.id}
                key={item.id}
                ribbonType="basic"
                title={item.data().title}
                image={item.data().image}
                ratings={item.data().ratings.ratingsNumber}
                extraHeight={25 - (index * 7 + 1)}
              />
            ))}
          </Swiper>
        </SwiperSection>
      )}

      {tvSeries && <Trailers data={tvSeries} />}

      <Advertisement />

      {actors && (
        <SwiperSection dark title="Najpopularniejsze role serialowe">
          <Swiper size={5} buttonsHeight="25%">
            {actors.map((item) => (
              <ExpandedCard
                key={item.id}
                // ribbonType="round"
                id={item.id}
                title={item.data().fullName}
                secondTitle={item.data().film}
                image={item.data().image}
              />
            ))}
          </Swiper>
        </SwiperSection>
      )}

      <News />
    </MainTemplate>
  );
}
