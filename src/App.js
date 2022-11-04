import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';

// Imports from my application
import Pages from 'pages';
import Movies from 'pages/MoviesPage/Movies';
import Movie from 'pages/MoviePage/MoviePage';
import Serial from 'pages/SerialPage/SerialPage';
import TVSeries from 'pages/TVSeries';
import NoMatch from 'pages/NoMatchPage/NoMatchPage';
import Login from 'pages/auth/LoginFormPage';
import User from 'pages/UserPage/UserPage';
import Register from 'pages/auth/RegisterFormPage';
import {routes} from 'routes';
import useAuth, {AuthProvider} from 'context/useAuth';
import {UserProvider} from 'context/useUser';
import {DatabaseProvider} from 'context/useDatabase';

function AuthenticatedRoute({children}) {
  const {user} = useAuth();

  if (!user) return <Navigate to={routes.login} replace />;

  return children || <Outlet />;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <DatabaseProvider>
            <Routes>
              <Route path={routes.home} element={<Pages />}>
                <Route element={<AuthenticatedRoute />}>
                  <Route path={routes.user} element={<User />} />
                </Route>
                <Route path={routes.login} element={<Login />} />
                <Route path={routes.register} element={<Register />} />
                <Route path={routes.movie} element={<Movie />} />
                <Route path={routes.serial} element={<Serial />} />
                <Route path={routes.movies} element={<Movies />} />
                <Route path={routes.tvSeries} element={<TVSeries />} />
              </Route>
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </DatabaseProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
