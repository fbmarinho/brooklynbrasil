import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAB41pGf_zuKMrB5LZdwvvdYtnMTPyCzZc",
    authDomain: "brooklynbrasil2019.firebaseapp.com",
    databaseURL: "https://brooklynbrasil2019.firebaseio.com",
    projectId: "brooklynbrasil2019",
    storageBucket: "",
    messagingSenderId: "741110960280",
    appId: "1:741110960280:web:134826940f629cba"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export default fb;