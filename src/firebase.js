import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { getDatabase } from "firebase/database";

const app = firebase.initializeApp({
  /*apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID*/
  apiKey: "AIzaSyDp-ek-5V4_qTgC5XeXggPGJDIQmIlPqH4",
  authDomain: "budget-best-dev.firebaseapp.com",
  databaseURL: "https://budget-best-dev-default-rtdb.firebaseio.com",
  projectId: "budget-best-dev",
  storageBucket: "budget-best-dev.appspot.com",
  messagingSenderId: "292064540118",
  appId: "1:292064540118:web:c2828780ffd3a9538ca077"
})

export const auth = app.auth()
export default app
export const db = getDatabase(app);