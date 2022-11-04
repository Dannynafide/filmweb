import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {useLocation} from 'react-router-dom';
import * as dbApi from 'api/database-client';

const DatabaseContext = createContext({
  movies: null,
  tvSeries: null,
  actors: null,
  loading: false,
  error: false,
  getMovies: () => {},
  getTvSeries: () => {},
  getActors: () => {},
  getMovie: () => {},
});

export function DatabaseProvider({children}) {
  const [movies, setMovies] = useState();
  const [tvSeries, setTvSeries] = useState();
  const [actors, setActors] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  // If we change page, reset the error state.
  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]);

  function getMovies() {
    setLoading(true);

    dbApi
      .getMovies()
      .then((result) => {
        setMovies(result.docs);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }

  function getTvSeries() {
    setLoading(true);

    dbApi
      .getTvSeries()
      .then((result) => setTvSeries(result.docs))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }

  function getActors() {
    setLoading(true);

    dbApi
      .getActors()
      .then((result) => {
        setActors(result.docs);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getMovies();
    getTvSeries();
    getActors();
  }, []);

  const memoedValue = useMemo(
    () => ({
      movies,
      tvSeries,
      actors,
      loading,
      error,
      getMovies,
      getTvSeries,
      getActors,
    }),
    [movies, tvSeries, actors, loading, error]
  );

  return (
    <DatabaseContext.Provider value={memoedValue}>
      {children}
    </DatabaseContext.Provider>
  );
}

export default function useDatabase() {
  return useContext(DatabaseContext);
}
