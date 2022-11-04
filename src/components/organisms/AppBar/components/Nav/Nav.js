import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link, matchPath, useLocation} from 'react-router-dom';

import './nav.scss';

function useRouteMatch(patterns) {
  const {pathname} = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  const routeMatch = useRouteMatch([
    '/movies',
    '/tv_series',
    '/games',
    '/rankings',
  ]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab ?? false} className="nav">
      <Tab
        label="Filmy"
        value="/movies"
        to="/movies"
        component={Link}
        tabIndex={0}
      />
      <Tab
        label="Seriale"
        value="/tv_series"
        to="/tv_series"
        component={Link}
        tabIndex={0}
      />
      <Tab
        label="Gry"
        value="/games"
        to="/games"
        component={Link}
        className="disabled"
        tabIndex={0}
      />
      <Tab
        label="Rankingi"
        value="/rankings"
        to="/rankings"
        component={Link}
        className="disabled"
        tabIndex={0}
      />
    </Tabs>
  );
}

export default function Nav() {
  return (
    <Box>
      <MyTabs />
    </Box>
  );
}
