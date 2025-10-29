import { initializeApp, getApps, getApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// }

const firebaseConfig = {
  apiKey: 'AIzaSyCvQ2mOFyUCQ9WIOefcgJLFDNqbEdKHkLs',
  authDomain: 'bw-firebase-hub.firebaseapp.com',
  projectId: 'bw-firebase-hub',
  storageBucket: 'bw-firebase-hub.firebasestorage.app',
  messagingSenderId: '206642100175',
  appId: '1:206642100175:web:4ab148dcef1082d25144ba',
  measurementId: 'G-203ZFM4WPV',
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
export default app
