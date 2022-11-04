import {doc, setDoc, getDoc, arrayUnion, arrayRemove} from 'firebase/firestore';
import {db} from './_firebase';

export async function getCurrentUserData(user) {
  const docRef = doc(db, 'users', user.uid);

  const response = await getDoc(docRef);
  return response.data();
}

export async function addToFavorites(user, filmID) {
  const docRef = doc(db, 'users', user.uid);

  const data = {
    favorites: {
      movies: arrayUnion(filmID),
    },
  };

  const response = await setDoc(docRef, data, {merge: true});
  return response;
}

export async function removeToFavorites(user, filmID) {
  const docRef = doc(db, 'users', user.uid);

  const data = {
    favorites: {
      movies: arrayRemove(filmID),
    },
  };

  const response = await setDoc(docRef, data, {merge: true});
  return response;
}
