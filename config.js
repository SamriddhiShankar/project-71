import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyA11kLzM2i6w_JH1eV0GgqlCNWmL2zD56A",
    authDomain: "project-71-64611.firebaseapp.com",
    projectId: "project-71-64611",
    storageBucket: "project-71-64611.appspot.com",
    messagingSenderId: "549668678348",
    appId: "1:549668678348:web:f62b5f7bafb6db75e3b069"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
