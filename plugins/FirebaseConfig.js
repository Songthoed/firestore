import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    var firebaseConfig = {
    apiKey: "AIzaSyAO46MdmgDbUt4SA3hU37SnaM8CApy3VbI",
    authDomain: "firestore-520ec.firebaseapp.com",
    databaseURL: "https://firestore-520ec.firebaseio.com",
    projectId: "firestore-520ec",
    storageBucket: "firestore-520ec.appspot.com",
    messagingSenderId: "331623091503",
    appId: "1:331623091503:web:bff456c35d81cb4ad8a5da"
  };
    firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()