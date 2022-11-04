import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'filmweb-copy.firebaseapp.com',
  databaseURL: 'https://filmweb-copy-default-rtdb.firebaseio.com',
  projectId: 'filmweb-copy',
  storageBucket: 'filmweb-copy.appspot.com',
  messagingSenderId: '813988815011',
  appId: '1:813988815011:web:c0cc7c5673b1cd8f639f16',
  measurementId: 'G-816L27ZHQ4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {app, db};
