import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBBpphOKAmIembhZp_aWt0pxa4M7YskUCw",
  authDomain: "twitter-clone-533e1.firebaseapp.com",
  projectId: "twitter-clone-533e1",
  storageBucket: "twitter-clone-533e1.appspot.com",
  messagingSenderId: "941903273333",
  appId: "1:941903273333:web:18602333323e932c05873c",
  measurementId: "G-636G55469G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
