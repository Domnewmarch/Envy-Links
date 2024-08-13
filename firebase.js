// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDpE4XIctgGwXdyRqikeBYueqCoBma3LoU',
  authDomain: 'qr-links-5d6e5.firebaseapp.com',
  projectId: 'qr-links-5d6e5',
  storageBucket: 'qr-links-5d6e5.appspot.com',
  messagingSenderId: '417557339819',
  appId: '1:417557339819:web:e1a578c6c7dcce957be1ee',
  measurementId: 'G-Y8KBHR6YQ2'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
