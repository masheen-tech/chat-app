import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID, MEASUREMENT_ID } from '@env';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: MEASUREMENT_ID,
};


let app;
if (firebase.getApps().length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}
const db = getFirestore(app);
const auth = getAuth();
export { db, auth };
