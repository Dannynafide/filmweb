import NewsCard from 'components/organisms/cards/NewsCard/NewsCard';
import SectionName from 'components/atoms/SectionTitle/SectionTitle';
import SectionBtn from 'components/atoms/Button/Button';
import styles from './news.module.scss';

export default function News() {
  return (
    <section className={styles.news}>
      <SectionName>Newsy</SectionName>

      <div className={styles.cards}>
        <NewsCard
          image="https://fwcdn.pl/nph/2025458/2022/38742_1.11.jpg"
          category="VOD"
          title="Reżyserzy Batgirl opowiadają o tym, jak odebrano im film"
          date="dzisiaj / 19 komentarzy"
        />
        <NewsCard
          image="https://fwcdn.pl/nph/2025458/2022/38742_1.11.jpg"
          category="VOD"
          title="Reżyserzy Batgirl opowiadają o tym, jak odebrano im film"
          date="dzisiaj / 19 komentarzy"
        />
        <NewsCard
          image="https://fwcdn.pl/nph/2025458/2022/38742_1.11.jpg"
          category="VOD"
          title="Reżyserzy Batgirl opowiadają o tym, jak odebrano im film"
          date="dzisiaj / 19 komentarzy"
        />
        <NewsCard
          image="https://fwcdn.pl/nph/2025458/2022/38742_1.11.jpg"
          category="VOD"
          title="Reżyserzy Batgirl opowiadają o tym, jak odebrano im film"
          date="dzisiaj / 19 komentarzy"
        />
        <NewsCard
          image="https://fwcdn.pl/nph/2025458/2022/38742_1.11.jpg"
          category="VOD"
          title="Reżyserzy Batgirl opowiadają o tym, jak odebrano im film"
          date="dzisiaj / 19 komentarzy"
        />
        <NewsCard
          image="https://fwcdn.pl/nph/2025458/2022/38742_1.11.jpg"
          category="VOD"
          title="Reżyserzy Batgirl opowiadają o tym, jak odebrano im film"
          date="dzisiaj / 19 komentarzy"
        />
      </div>
      <SectionBtn className={styles.btn}>Zobacz wszystkie newsy</SectionBtn>
    </section>
  );
}
