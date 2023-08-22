// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyAeAkp5Y6wPAUdBbK7816JJ8v0Kys1Iv0M',
  authDomain: 'ilearncenterbe.firebaseapp.com',
  projectId: 'ilearncenterbe',
  storageBucket: 'ilearncenterbe.appspot.com',
  messagingSenderId: '60260642566',
  appId: '1:60260642566:web:9a0695b3834a2964b3f887',
  measurementId: 'G-JSYVDQF0Q4',
}

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig)

export const auth = getAuth(firebase_app)
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
export default firebase_app
