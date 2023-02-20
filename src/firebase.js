import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB7wVcFz5SYVb9uyj8uSGS4h65Es3xHEB8',
  authDomain: 'rayblog-8a1e3.firebaseapp.com',
  projectId: 'rayblog-8a1e3',
  storageBucket: 'rayblog-8a1e3.appspot.com',
  messagingSenderId: '182754878260',
  appId: '1:182754878260:web:be21525115d03f505bfb61',
  measurementId: 'G-GVPKZK80NC',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const storage = getStorage(app);
export const db = getFirestore(app);
