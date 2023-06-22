import {Link} from 'react-router-dom';

// MaterialUI
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

// Imports from my application
import MiniLogo from 'assets/images/logo-icon.png';
import Logo from 'assets/images/logo.png';
import MyFormButton from 'components/atoms/ButtonForm/ButtonForm';
import IconBtn from 'components/atoms/ButtonIcon/ButtonIcon';
import SearchInput from 'components/molecules/InputSearch';
import useAuth from 'context/useAuth';
import useScrollPosition from 'hooks/useScrollPosition';
import {routes} from 'routes';
import Nav from './components/Nav/Nav';
import UserHeader from './components/UserHeader/UserHeader';
import styles from './desktopAppBar.module.scss';

function MinimizedAppBar({setOpenSearchBar, user}) {
  return (
    <div className={styles.desktopAppBar}>
      <div className={styles.appBar__top}>
        <Link to={routes.home}>
          <img src={MiniLogo} alt="Logo" className={styles.logo} />
        </Link>

        <Nav />

        <div className={styles.wrapperBtns}>
          <SearchInput onlyIcon setOpenSearchBar={setOpenSearchBar} />

          {user ? (
            <UserHeader />
          ) : (
            <>
              <MyFormButton
                color="facebook"
                startIcon={<FacebookOutlinedIcon />}
                inactive
              >
                Zaloguj się kontem Facebook
              </MyFormButton>
              <IconBtn link={routes.login}>
                <LoginRoundedIcon />
              </IconBtn>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DesktopAppBar({openSearchBar, setOpenSearchBar}) {
  const scrollPosition = useScrollPosition();
  const {user} = useAuth();

  if (openSearchBar) {
    return (
      <div className={styles.desktopAppBar}>
        <div className={styles.appBar__top}>
          <SearchInput
            setOpenSearchBar={setOpenSearchBar}
            openSearchBar={openSearchBar}
          />
        </div>
      </div>
    );
  }

  if (scrollPosition <= 10) {
    return (
      <div className={styles.desktopAppBar}>
        <div className={styles.appBar__top}>
          <Link to={routes.home}>
            <img src={Logo} alt="Logo" className={styles.logo} />
          </Link>

          <SearchInput />

          <div className={styles.wrapperBtns}>
            {!user && (
              <>
                <MyFormButton
                  color="facebook"
                  startIcon={<FacebookOutlinedIcon />}
                  inactive
                >
                  Zaloguj się kontem <b>Facebook</b>
                </MyFormButton>

                <IconBtn link={routes.login} style={{fontSize: '3rem'}}>
                  <LoginRoundedIcon />
                </IconBtn>
              </>
            )}

            {user && <UserHeader />}
          </div>
        </div>

        <div className={styles.appBar__bottom}>
          <Nav />
        </div>
      </div>
    );
  }

  // minimized AppBar
  return <MinimizedAppBar setOpenSearchBar={setOpenSearchBar} user={user} />;
}
