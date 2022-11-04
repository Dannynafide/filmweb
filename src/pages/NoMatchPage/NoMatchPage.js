import {Link} from 'react-router-dom';

import MainTemplate from 'template/MainTemplate/MainTemplate';
import styles from './noMatchPage.module.scss';

export default function NoMatchPage() {
  return (
    <MainTemplate isAppBarSolidBackground>
      <div className={styles.wrapper}>
        <h2 className={styles.errorTitle}>
          <b>NIE ZNALEZIONO STRONY O PODANYM ADRESIE.</b>
        </h2>
        <p className={styles.errorDescription}>
          Przepraszamy. Strona, której szukasz nie została odnaleziona.
          <br />
          Sprawdź poprawność adresu lub zajrzyj na stronę{' '}
          <Link to="/" className={styles.link}>
            startową naszego serwisu
          </Link>
          .
        </p>
      </div>
    </MainTemplate>
  );
}
