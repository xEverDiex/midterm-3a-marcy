import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAws6JMcuCGsSB7dEDi7l-k9d0VYYgGWls",
    authDomain: "bsit3a-199e2.firebaseapp.com",
    projectId: "bsit3a-199e2",
    storageBucket: "bsit3a-199e2.appspot.com",
    messagingSenderId: "1012344498638",
    appId: "1:1012344498638:web:a15dfec614d711b8aa239f",
    measurementId: "G-BSX77RY78F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;