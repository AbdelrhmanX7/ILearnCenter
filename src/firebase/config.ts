// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
  measurementId: 'YOUR_MEASUREMENT_ID',
}

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig)

export const auth = getAuth(firebase_app)
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
export default firebase_app
