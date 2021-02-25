import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDWub0bxf6-3jpG9PUj2h717Hr4rK1N0Qw",
    authDomain: "slack-clone-challenge-a8c62.firebaseapp.com",
    projectId: "slack-clone-challenge-a8c62",
    storageBucket: "slack-clone-challenge-a8c62.appspot.com",
    messagingSenderId: "340083220994",
    appId: "1:340083220994:web:ccf74529f0309b6c9c3d1b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;