import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
  var config = {
    apiKey: "AIzaSyA1OXlpKnIy0ZTPpNbjM_2wfAM2YWxg91E",
    authDomain: "example-b0180.firebaseapp.com",
    databaseURL: "https://example-b0180.firebaseio.com",
    projectId: "example-b0180",
    storageBucket: "",
    messagingSenderId: "179938690696"
  };
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 