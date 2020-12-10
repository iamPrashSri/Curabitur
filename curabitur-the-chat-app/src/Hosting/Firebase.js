import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDZ3m7qRS-kEnadLYix8a40ocrISeqT3A",
    authDomain: "curabitur-chat-app.firebaseapp.com",
    projectId: "curabitur-chat-app",
    storageBucket: "curabitur-chat-app.appspot.com",
    messagingSenderId: "1095963220343",
    appId: "1:1095963220343:web:700c5d0bb88c2e15f92972",
    measurementId: "G-5GZT022V97"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;