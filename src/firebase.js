import firebase from 'firebase/app'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAZP8NHt0BmQpLty86iIo0R56DIZGJwwZE",
    authDomain: "takion-loaiza.firebaseapp.com",
    projectId: "takion-loaiza",
    storageBucket: "takion-loaiza.appspot.com",
    messagingSenderId: "107334527174",
    appId: "1:107334527174:web:764afc12453c7f95530fc7"
};
const fb =firebase.initializeApp(firebaseConfig)

export const db = fb.firestore();