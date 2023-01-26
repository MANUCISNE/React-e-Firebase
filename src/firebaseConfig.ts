import "firebase/firestore";
import firebase from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyC4nV1Fkwzem53K3nfZ-hPFNDuxvj-Ceds",
    authDomain: "booker---reactapp.firebaseapp.com",
    projectId: "booker---reactapp",
    storageBucket: "booker---reactapp.appspot.com",
    messagingSenderId: "638403471272",
    appId: "1:638403471272:web:39faba7ceafa68ec8f5f9d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();