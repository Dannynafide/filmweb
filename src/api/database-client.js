import {collection, getDocs} from 'firebase/firestore';

import {db} from './_firebase';

export async function getMovies() {
  const querySnapshot = await getDocs(collection(db, 'movies'));

  return querySnapshot;
}

export async function getTvSeries() {
  const querySnapshot = await getDocs(collection(db, 'tvSeries'));

  return querySnapshot;
}

export async function getActors() {
  const response = await getDocs(collection(db, 'actors'));

  return response;
}

export async function getMovie(id) {
  const querySnapshot = await getDocs(collection(db, 'movies'));
  let movie;

  querySnapshot.forEach((doc) => {
    if (doc.id === id) {
      movie = doc.data();
    }
  });

  return movie;
}

// import {addDoc} from 'firebase/firestore';
// export async function addMovie(data) {
//   // const data = {
//   //   title: '',
//   //   originalTitle: '',
//   //   filmTime: '',
//   //   year: '',
//   //   ratings: {value: '', ratingsNumber: ''},
//   //   description: '',
//   //   coverPhoto: '',
//   //   image: '',
//   // };
//   const response = await addDoc(collection(db, 'movies'), data);

//   return response;
// }

// export async function addTvSeries(data) {
//   const response = await addDoc(collection(db, 'tvSeries'), data);

//   return response;
// }

// export async function addActor(data) {
//   // const data = {
//   //   fullName: '',
//   //   age: '',
//   //   born: '2',
//   //   birthPlace: '',
//   //   ratings: {value: '', ratingsNumber: ''},
//   //   image: '',
//   //   biography: "",
//   // };
//   const response = await addDoc(collection(db, 'actors'), data);

//   return response;
// }
