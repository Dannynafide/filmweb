// Imports from my application
import MainTemplate from 'template/MainTemplate/MainTemplate';
import useDatabase from 'context/useDatabase';
import ExtraHeightCard from 'components/organisms/cards/ExtraHeightCard';
import ExpandedCard from 'components/organisms/cards/ExpandedCard';
import Swiper from 'components/organisms/Swiper/Swiper';
import SwiperSection from 'containers/SwiperSection/SwiperSection';
import MostPopular from 'containers/MostPopular/MostPopular';
import Trailers from 'containers/Trailers/Trailers';
import News from 'containers/News/News';
import Advertisement from 'containers/Advertisement/Advertisement';

export default function Movies() {
  const {movies, actors} = useDatabase();

  return (
    <MainTemplate>
      {movies && (
        <MostPopular
          pageTitle="Filmy"
          subtitle="najpopularniejsze"
          data={movies}
        />
      )}

      {movies && <Trailers data={movies} />}

      {movies && (
        <SwiperSection
          title="Nie przegap w kinach"
          btnName="Zobacz repertuar kin"
          data={movies}
          ribbonType="basic"
        />
      )}

      <Advertisement />

      {movies && (
        <SwiperSection
          titlePrefix="TOP DNIA:"
          title="Filmy na VOD"
          btnName="Sprawdź, co obejrzeć na VOD"
          data={movies}
          ribbonType="basic"
          number
        />
      )}

      {movies && (
        <SwiperSection
          light
          title="Najbardziej oczekiwane"
          btnName="Zobacz pełen ranking"
        >
          <Swiper>
            {movies.map((item, index) => (
              <ExtraHeightCard
                key={item.id}
                id={item.id}
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

      {actors && (
        <SwiperSection dark title="Najpopularniejsze role filmowe">
          <Swiper size={5} buttonsHeight="25%">
            {actors.map((item) => (
              <ExpandedCard
                key={item.id}
                id={item.id}
                title={item.data().fullName}
                secondTitle={item.data().film}
                image={item.data().image}
              />
            ))}
          </Swiper>
        </SwiperSection>
      )}

      {actors && (
        <SwiperSection titlePrefix="TEGO DNIA URODZILI SIĘ" data={actors} />
      )}

      {movies && (
        <SwiperSection
          dark
          title="Najpopularniejsze postacie"
          btnName="Zobacz wszystkie postacie"
          data={movies}
        />
      )}

      <News />
    </MainTemplate>
  );
}
