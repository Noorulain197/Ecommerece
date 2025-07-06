import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAmQKf-0Wurzo4U0wrGbv1I6fFTGFCh4hs",
  authDomain: "fullstack-51772.firebaseapp.com",
  projectId: "fullstack-51772",
  storageBucket: "fullstack-51772.appspot.com",
  messagingSenderId: "1013471138809",
  appId: "1:1013471138809:web:f47fbcecfbd5fee041a328",
  measurementId: "G-PE6H6B4TPB"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
