import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth';

export async function login(email, password) {
  const auth = getAuth();
  const response = await signInWithEmailAndPassword(auth, email, password);

  return response;
}

export async function logout() {
  const auth = getAuth();
  const response = await signOut(auth);

  return response;
}

export async function getCurrentUser() {
  const auth = getAuth();

  // Source: https://groups.google.com/g/firebase-talk/c/836OyVNd_Yg
  const p = new Promise((resolve) => {
    const observer = function func(user) {
      // Unsubscribe on first call.
      // eslint-disable-next-line no-use-before-define
      unsubscribe();
      // Resolve with current state.
      resolve(user);
    };
    const unsubscribe = onAuthStateChanged(auth, observer);
  });

  return p;
}

export async function signUp(email, password) {
  const auth = getAuth();
  const response = await createUserWithEmailAndPassword(auth, email, password);

  return response;
}

export async function updateUserProfile(data) {
  const auth = getAuth();
  const response = await updateProfile(auth.currentUser, data);

  return response;
}

export async function updateUserEmail(email) {
  const auth = getAuth();
  const response = await updateEmail(auth.currentUser, email);

  return response;
}

export async function updateUserPassword(oldPassword, newPassword) {
  const auth = getAuth();

  const credential = EmailAuthProvider.credential(
    auth.currentUser.email,
    oldPassword
  );
  await reauthenticateWithCredential(auth.currentUser, credential);

  const response = await updatePassword(auth.currentUser, newPassword);

  return response;
}

// Helpful: https://dev.to/finiam/predictable-react-authentication-with-the-context-api-g10
