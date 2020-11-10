import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyANb7o6eGCuOsPb6El07xNEQpkzUTNsBJQ",
    authDomain: "listtodo-3bcb4.firebaseapp.com",
    databaseURL: "https://listtodo-3bcb4.firebaseio.com",
    projectId: "listtodo-3bcb4",
    storageBucket: "listtodo-3bcb4.appspot.com",
    messagingSenderId: "510472746758",
    appId: "1:510472746758:web:7d8542b99251edf5335087",
    measurementId: "G-N1RM1WJ1WQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const DB = firebase.database().ref('/Cong_Viec');