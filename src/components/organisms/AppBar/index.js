import {useState, useEffect} from 'react';

// Imports from my application
import MobileAndTabletAppBar from 'components/organisms/AppBar/MobileAndTabletAppBar';
import useScrollPosition from 'hooks/useScrollPosition';
import useWindowSize from 'hooks/useWindowSize';
import breakpoints from 'styles/breakpoints.scss';
import styles from './appBar.module.scss';
import DesktopAppBar from './DesktopAppBar';

export default function Appbar({isSolidBackground = false}) {
  const scrollPosition = useScrollPosition();
  const widthWindow = useWindowSize()[0];
  const desktopAndUp = parseInt(breakpoints.desktopAndUp, 10);

  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [solidBackground, setSolidBackground] = useState(false);

  const handlerOpenSearchBar = () => setOpenSearchBar(!openSearchBar);

  useEffect(() => {
    if (isSolidBackground) {
      setSolidBackground(true);
    } else if (scrollPosition > 10) {
      setSolidBackground(true);
    } else {
      setSolidBackground(false);
    }
  }, [scrollPosition, isSolidBackground]);

  const AppBar =
    widthWindow < desktopAndUp ? (
      <MobileAndTabletAppBar
        openSearchBar={openSearchBar}
        setOpenSearchBar={handlerOpenSearchBar}
      />
    ) : (
      <DesktopAppBar
        openSearchBar={openSearchBar}
        setOpenSearchBar={handlerOpenSearchBar}
      />
    );

  const solidBackgroundClass = solidBackground && styles.solidBackground;
  const desktopHeight =
    widthWindow >= desktopAndUp
      ? scrollPosition <= 10
        ? {height: '100px'}
        : {height: '50px'}
      : null;

  return (
    <div>
      <div className={`${styles.appBar} ${solidBackgroundClass}`}>{AppBar}</div>

      {isSolidBackground && (
        <div className={styles.solidBackgroundBox} style={desktopHeight} />
      )}
    </div>
  );
}
