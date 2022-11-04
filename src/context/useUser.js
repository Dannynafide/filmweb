// https://dev.to/finiam/predictable-react-authentication-with-the-context-api-g10

import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {useLocation} from 'react-router-dom';
import * as userApi from 'api/user-client';
import useAuth from 'context/useAuth';

const UserContext = createContext({
  userData: null,
  loading: false,
  error: false,
  updateFavorites: () => {},
});

// Export the provider as we need to wrap the entire app with it
export function UserProvider({children}) {
  const [userData, setUserData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const {user} = useAuth();

  const location = useLocation();

  function getCurrentUserData() {
    userApi
      .getCurrentUserData(user)
      .then((result) => {
        setUserData(result);
      })
      .catch((e) => setError(e))
      .finally(() => {
        setLoadingInitial(false);
      });
  }

  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]);

  useEffect(() => {
    getCurrentUserData();
  }, [user]);

  function updateFavorites(user2, filmID, isFavorites) {
    setLoading(true);
    if (isFavorites) {
      userApi
        .addToFavorites(user2, filmID)
        .then(() => getCurrentUserData())
        .catch((e) => setError(e))
        .finally(() => setLoading(false));
    } else {
      userApi
        .removeToFavorites(user2, filmID)
        .then(() => getCurrentUserData())
        .catch((e) => setError(e))
        .finally(() => setLoading(false));
    }
  }

  const memoedValue = useMemo(
    () => ({
      userData,
      loading,
      error,
      updateFavorites,
    }),
    [userData, loading, error]
  );

  return (
    <UserContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </UserContext.Provider>
  );
}

export default function useUser() {
  return useContext(UserContext);
}
