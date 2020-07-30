import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAAjik1j_IV-y9dlyU9-tUGmDK6ZjBeR1k',
  authDomain: 'react-photo-gallery-614b8.firebaseapp.com',
  databaseURL: 'https://react-photo-gallery-614b8.firebaseio.com',
  projectId: 'react-photo-gallery-614b8',
  storageBucket: 'react-photo-gallery-614b8.appspot.com',
  messagingSenderId: '443323022616',
  appId: '1:443323022616:web:333c42e29262dc77df326d',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
