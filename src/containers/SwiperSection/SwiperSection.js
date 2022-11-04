import './swiperSection.scss';
import Button from '../../components/atoms/Button/Button';
import Swiper from '../../components/organisms/Swiper/Swiper';
import Card from '../../components/organisms/cards/Card';
import SectionName from '../../components/atoms/SectionTitle/SectionTitle';

export default function SwiperSection({
  title,
  titlePrefix,
  dark,
  light,
  data,
  btnName,
  ribbonType,
  number,
  children,
}) {
  const darkClass = dark && 'swiperST--dark';
  const lightClass = light && 'swiperST--light';

  return (
    <section className={`swiperST ${darkClass || lightClass}`}>
      <SectionName>
        <b>{titlePrefix} </b>
        {title}
      </SectionName>

      <div>
        {data && (
          <Swiper>
            {data.map((item, index) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.data().title || item.data().fullName}
                secondTitle={item.data().age}
                image={item.data().image}
                ribbonType={ribbonType}
                number={number ? (index < 10 ? index + 1 : null) : null}
              />
            ))}
          </Swiper>
        )}

        {children}
      </div>

      {btnName && <Button dark={dark}>{btnName}</Button>}
    </section>
  );
}
