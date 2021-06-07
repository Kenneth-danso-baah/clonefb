// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDJNRrN6UJwC7ZNkbBhIEFDREpaxerrZbk",
    authDomain: "facebookclone-31734.firebaseapp.com",
    projectId: "facebookclone-31734",
    storageBucket: "facebookclone-31734.appspot.com",
    messagingSenderId: "86896330153",
    appId: "1:86896330153:web:7cb3710e9bd028cec970b8",
    measurementId: "G-RMT59T59Q3"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db=app.firestore();
const storage = firebase.storage();

export {db,storage};
