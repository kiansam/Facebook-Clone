import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDA4uRyR4DyC7b_eE5nMqHgkcaa8mScLz0",
  authDomain: "facebook-cl1.firebaseapp.com",
  projectId: "facebook-cl1",
  storageBucket: "facebook-cl1.appspot.com",
  messagingSenderId: "13190349013",
  appId: "1:13190349013:web:ee1da2fa9732edbf8aa25c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
