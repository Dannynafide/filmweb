// https://dev.to/finiam/predictable-react-authentication-with-the-context-api-g10

import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import * as authApi from 'api/auth-client';

const AuthContext = createContext({
  user: null,
  loading: false,
  error: false,
  setError: () => {},
  login: () => {},
  signUp: () => {},
  logout: () => {},
  updateProfile: () => {},
  updateEmail: () => {},
  updatePassword: () => {},
});

// Export the provider as we need to wrap the entire app with it
export function AuthProvider({children}) {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  // If we change page, reset the error state.
  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]);

  function getCurrentUser() {
    authApi
      .getCurrentUser()
      .then((userr) => {
        setUser({
          accessToken: userr.accessToken,
          displayName: userr.displayName,
          email: userr.email,
          uid: userr.uid,
        });
      })
      .catch((e) => setError(e))
      .finally(() => {
        setLoadingInitial(false);
      });
  }

  // Check if there is a currently active session
  // when the provider is mounted for the first time.
  //
  // If there is an error, it means there is no session.
  //
  // Finally, just signal the component that the initial load
  // is over.
  useEffect(() => {
    getCurrentUser();
  }, []);

  // Flags the component loading state and posts the login
  // data to the server.
  //
  // An error means that the email/password combination is
  // not valid.
  //
  // Finally, just signal the component that loading the
  // loading state is over.
  function login(email, password) {
    setLoading(true);

    authApi
      .login(email, password)
      .then((result) => {
        setUser(result.user);
        navigate('/');
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }

  // Sends sign up details to the server. On success we just apply
  // the created user to the state.
  function signUp(email, password) {
    // Kody błędu
    // https://firebase.google.com/docs/reference/js/auth#autherrorcodes

    setLoading(true);

    authApi
      .signUp(email, password)
      .then((result) => {
        setUser(result.user);
        navigate('/');
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }

  // Call the logout endpoint and then remove the user
  // from the state.
  function logout() {
    authApi.logout().then(() => setUser(undefined));
  }

  function updateProfile({displayName, photoURL}) {
    setLoading(true);

    const data = {};
    if (displayName) data.displayName = displayName;
    if (photoURL) data.photoURL = photoURL;

    authApi
      .updateUserProfile(data)
      .then(() => {
        setUser({...user, ...data});
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => setLoading(false));
  }

  function updateEmail(email) {
    setLoading(true);
    authApi
      .updateUserEmail(email)
      .then(() => {
        getCurrentUser();
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => setLoading(false));
  }

  function updatePassword(oldPassword, newPassword) {
    setLoading(true);
    authApi
      .updateUserPassword(oldPassword, newPassword)
      .then(() => {
        getCurrentUser();
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => setLoading(false));
  }

  // Make the provider update only when it should.
  // We only want to force re-renders if the user,
  // loading or error states change.
  //
  // Whenever the `value` passed into a provider changes,
  // the whole tree under the provider re-renders, and
  // that can be very costly! Even in this case, where
  // you only get re-renders when logging in and out
  // we want to keep things very performant.
  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      setError,
      login,
      signUp,
      logout,
      updateProfile,
      updateEmail,
      updatePassword,
    }),
    [user, loading, error]
  );

  // We only want to render the underlying app after we
  // assert for the presence of a current user.
  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
}

// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context component.
export default function useAuth() {
  return useContext(AuthContext);
}
