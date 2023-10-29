import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// TODO 秘匿化
const firebaseConfig = {
  apiKey: 'AIzaSyDsIzbIKRNUnhoO6zcO2Y9fFJLiAnyTaEM',
  authDomain: 'snss-3529c.firebaseapp.com',

  projectId: 'snss-3529c',
  storageBucket: 'snss-3529c.appspot.com',
  messagingSenderId: '215188544646',
  appId: '1:215188544646:web:ec53290d47eb1b684b4507',
  measurementId: 'G-S0GD8M0GDQ'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

// TODO onAuthStateChanged
