import {useState} from 'react';
import {Link} from 'react-router-dom';

// MaterialUI
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

// Imports from my application
import useAuth from 'context/useAuth';
import IconBtn from 'components/atoms/ButtonIcon/ButtonIcon';
import MyFormButton from 'components/atoms/ButtonForm/ButtonForm';
import SearchInput from 'components/molecules/InputSearch';
import {routes} from 'routes';
import Logo from 'assets/images/logo.png';
import styles from './mobileAndTabletAppBar.module.scss';

// EN - The menu after expanded.
// PL - Menu po rozwinięciu.
function OpenMenu({closeMenu}) {
  const [expend, setExpend] = useState(false);
  const {user, logout} = useAuth();

  const dataToDropDown = [
    {
      id: 0,
      name: 'Filmy',
      data: [
        {
          name: 'Strona główna',
          link: routes.movies,
        },
        {
          name: 'Premiery i zapowiedzi',
        },
        {
          name: 'Zwiastuny',
          class: styles.spaceBottom,
        },
        {
          name: 'Baza filmów',
        },
        {
          name: 'Baza osób kina',
        },
        {
          name: 'Baza postaci',
        },
        {
          name: 'Baza światów',
          class: styles.spaceBottom,
        },
        {
          name: 'Nagrody',
        },
        {
          name: 'Newsy',
        },
        {
          name: 'Recenzje',
        },
        {
          name: 'Magazyn',
          class: styles.spaceBottom,
        },
        {
          name: 'Filmweb poleca',
        },
        {
          name: 'Programy filmwebu',
        },
      ],
    },
    {
      id: 1,
      name: 'Seriale',
      data: [
        {
          name: 'Strona główna seriali',
          link: routes.tvSeries,
        },
        {
          name: 'Premiery i zapowiedzi',
          class: styles.spaceBottom,
        },
        {
          name: 'Baza seriali',
        },
        {
          name: 'Baza programów',
          class: styles.spaceBottom,
        },
        {
          name: 'Newsy',
        },
        {
          name: 'Recenzje',
        },
        {
          name: 'Serial Killers',
        },
      ],
    },
  ];

  const inactiveLinks = [
    'Gry',
    'Rankingi',
    'Mój filmweb',
    'Repertuar kin',
    'VOD',
    'Program TV',
  ];

  const showList = (id) => {
    if (expend === id) {
      setExpend(false);
    } else {
      setExpend(id);
    }
  };

  return (
    <div className={styles.menuOpen}>
      <div className={styles.userHeader}>
        <div className={styles.avatar}>
          {user ? (
            <div className={styles.avatar}>
              <IconBtn link={routes.user}>
                <AccountCircleIcon />
              </IconBtn>
              <span className={styles.userName}>
                {user.displayName ? user.displayName : user.email}
              </span>
            </div>
          ) : (
            <MyFormButton link={routes.login} className={styles.myFormButton}>
              Zaloguj się
            </MyFormButton>
          )}

          <IconBtn onClick={closeMenu}>
            <CloseRoundedIcon />
          </IconBtn>
        </div>
        <div className={styles.userHeader__buttons}>
          <button type="button">Powiadomienia</button>
          <button
            type="button"
            onClick={() => {
              logout();
              closeMenu();
            }}
          >
            Wyloguj się
          </button>
        </div>
      </div>

      <div className={styles.siteMenuWrapper}>
        <ul className={styles.list}>
          {dataToDropDown.map((item) => (
            <li key={item.id} className={styles.item}>
              <div
                className={styles.itemName}
                onClick={() => showList(item.id)}
                onKeyPress={() => showList(item.id)}
                role="button"
                tabIndex="0"
              >
                {item.name}

                {expend === item.id ? (
                  <IconBtn tabIndex={-1}>
                    <ExpandLessIcon />
                  </IconBtn>
                ) : (
                  <IconBtn tabIndex={-1}>
                    <ExpandMoreIcon />
                  </IconBtn>
                )}
              </div>

              {expend === item.id ? (
                <div className={styles.item__submenu}>
                  <ul className={`${styles.list} ${styles.listNested}`}>
                    {item.data.map((dataItem) => (
                      <li
                        key={dataItem.name}
                        className={`${styles.item__sub} ${dataItem.class}`}
                      >
                        <Link to={dataItem.link}>
                          <span
                            className={
                              !dataItem.link ? styles.lineThrough : null
                            }
                          >
                            {dataItem.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          ))}

          {inactiveLinks.map((item) => (
            <li key={item} className={styles.item}>
              <button
                type="button"
                className={`${styles.itemName} ${styles.lineThrough}`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// EN - The menu before expanded.
// PL - Menu przed rozwinięciem.
export default function MobileAndTabletAppBar({
  openSearchBar,
  setOpenSearchBar,
}) {
  const [menuOpener, setMenuOpener] = useState(false);
  const {user} = useAuth();

  // The search bar is open.
  if (openSearchBar) {
    return (
      <div className={styles.wrapper}>
        <SearchInput
          setOpenSearchBar={setOpenSearchBar}
          openSearchBar={openSearchBar}
        />
      </div>
    );
  }

  // The menu is expanded.
  if (menuOpener) {
    return <OpenMenu closeMenu={() => setMenuOpener(!menuOpener)} />;
  }

  // Mobile and tablet appbar
  return (
    <div className={styles.wrapper}>
      <Link to={routes.home}>
        <img src={Logo} alt="Logo" className={styles.logo} />
      </Link>

      <div className={styles.icons}>
        <SearchInput onlyIcon setOpenSearchBar={setOpenSearchBar} />

        {user ? (
          <IconBtn link={routes.user}>
            <AccountCircleIcon />
          </IconBtn>
        ) : (
          <IconBtn link={routes.login}>
            <LoginRoundedIcon />
          </IconBtn>
        )}
        <IconBtn onClick={() => setMenuOpener(!menuOpener)}>
          <MenuRoundedIcon />
        </IconBtn>
      </div>
    </div>
  );
}
