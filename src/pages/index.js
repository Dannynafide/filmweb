import {Outlet, useLocation} from 'react-router-dom';

// Imports from my application
import HomePage from 'pages/HomePage/HomePage';

export default function Pages() {
  const {pathname} = useLocation();
  const page = pathname === '/' ? <HomePage /> : <Outlet />;

  return page;
}
