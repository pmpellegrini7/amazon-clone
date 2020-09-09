import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrmzf_lyo43X7dYNfHKDbWA2RnEG9ItG8",
  authDomain: "clone-bb06b.firebaseapp.com",
  databaseURL: "https://clone-bb06b.firebaseio.com",
  projectId: "clone-bb06b",
  storageBucket: "clone-bb06b.appspot.com",
  messagingSenderId: "169957599470",
  appId: "1:169957599470:web:7ff555e7799c7fe0f3ebff",
  measurementId: "G-Y9ND1M9G3E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
