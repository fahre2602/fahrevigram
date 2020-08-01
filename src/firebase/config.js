import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDRFjmTKLPV3mFNxFRdpp8WZKiC8tTbvsY",
    authDomain: "fahrevi-gram.firebaseapp.com",
    databaseURL: "https://fahrevi-gram.firebaseio.com",
    projectId: "fahrevi-gram",
    storageBucket: "fahrevi-gram.appspot.com",
    messagingSenderId: "541413859183",
    appId: "1:541413859183:web:ae2751d78e4bbfc3dd529a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    projectStorage, projectFirestore, timestamp
};