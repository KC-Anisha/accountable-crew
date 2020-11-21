import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAFc5EENAlnbmsROxZaQZxHmUThAcQa5ho",
    authDomain: "accountable-crew.firebaseapp.com",
    databaseURL: "https://accountable-crew.firebaseio.com",
    projectId: "accountable-crew",
    storageBucket: "accountable-crew.appspot.com",
    messagingSenderId: "603704836078",
    appId: "1:603704836078:web:b0f3765c0670fdb567d8ff",
    measurementId: "G-QG66RRQ2EP"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;