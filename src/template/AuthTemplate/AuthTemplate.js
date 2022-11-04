// Imports from my application
import useAuth from 'context/useAuth';
import MyFormButton from 'components/atoms/ButtonForm/ButtonForm';
import styles from './authTemplate.module.scss';

const data = [
  {
    id: 0,
    title: 'ODKRYWAJ NOWE FILMY',
    description:
      'Otrzymuj rekomendacje filmów, które są w Twoim guście. Porównuj swój gust z gustem znajomych.',
  },
  {
    id: 1,
    title: 'SPRAWDZAJ OCENY ZNAJOMYCH',
    description:
      'Zobacz, jak oceniają filmy Twoi znajomi, dyskutuj z nimi o kinie.',
  },
  {
    id: 2,
    title: 'OCENIAJ FILMY I SERIALE',
    description:
      'Twórz bibliotekę obejrzanych tytułów i tych, które chcesz zobaczyć.',
  },
];

export default function AuthTemplate({children, title}) {
  const {user} = useAuth();

  const loggedTitle = 'Jesteś juz zalogowany!';

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginTemplate}>
        <h1 className={styles.titleHeader}> {!user ? title : loggedTitle}</h1>
        {!user ? (
          children
        ) : (
          <MyFormButton
            link="/"
            filmweb={+true}
            bold={+true}
            style={{marginTop: '70px'}}
          >
            Mozesz przejść na stronę główną
          </MyFormButton>
        )}
      </div>
      <div className={styles.extended}>
        <div className={styles.center}>
          {data.map((item) => (
            <div key={item.id}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
