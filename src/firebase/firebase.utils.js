import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA30f_u7JfZLxKBhgG79_tg-q-dJB6hpmE",
    authDomain: "crwn-clothing-fe368.firebaseapp.com",
    projectId: "crwn-clothing-fe368",
    storageBucket: "crwn-clothing-fe368.appspot.com",
    messagingSenderId: "399660194465",
    appId: "1:399660194465:web:3146aa1cdac764052caee0",
    measurementId: "G-GF3ZD1EQX8"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: "select_account"})

export const signInWithGoogle = () => auth.signInWithPopup(provider)
