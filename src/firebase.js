// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCeKXaSkCM2rHe2n_gEC5CJmkdtsrpIC-0",
    authDomain: "instargram-reeels-clone.firebaseapp.com",
    databaseURL: "https://instargram-reeels-clone.firebaseio.com",
    projectId: "instargram-reeels-clone",
    storageBucket: "instargram-reeels-clone.appspot.com",
    messagingSenderId: "220941182353",
    appId: "1:220941182353:web:acc2732b2880026ac32630",
    measurementId: "G-LDZXQ6TEGJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;