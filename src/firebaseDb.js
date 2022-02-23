import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyCunPP4q16BqPnOdhBEWRn0QatJWMVjmKs',
    authDomain: 'task-list-522b3.firebaseapp.com',
    projectId: 'task-list-522b3',
    storageBucket: 'task-list-522b3.appspot.com',
    messagingSenderId: '332540505517',
    appId: '1:332540505517:web:c794faaffb91cf22bdc524'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
