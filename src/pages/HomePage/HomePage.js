import {useTypewriter} from 'react-simple-typewriter';
import {Link} from 'react-router-dom';

// Import from my application
import {routes} from 'routes';
import MainTemplate from 'template/MainTemplate/MainTemplate';
import style from './homePage.module.scss';

export default function HomePage() {
  const [text] = useTypewriter({
    words: ['Front-End Developer'],
  });

  return (
    <MainTemplate>
      <div className={style.container}>
        <h1 className={style.mainText}>
          Daniel Pakoca <span>{text}</span>
        </h1>
        <h2 className={style.title}>Witaj Na Mojej Stronie</h2>
        <p className={style.paragraph}>
          Na potrzeby nauki stworzyłem część strony &quot;filmweb.pl&quot;.
          Obecnie jest dostępna tylko sekcja{' '}
          <Link
            to={routes.movies}
            preventScrollReset={0}
            className={style.link}
          >
            filmów
          </Link>{' '}
          i{' '}
          <Link to={routes.tvSeries} className={style.link}>
            seriali
          </Link>
          .
        </p>
      </div>
    </MainTemplate>
  );
}
