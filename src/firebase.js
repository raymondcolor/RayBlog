import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBzfgeX5L--nuhA1jqZo9uFdLS3XlXhPrg',
  authDomain: 'rayblog-a3a5d.firebaseapp.com',
  projectId: 'rayblog-a3a5d',
  storageBucket: 'rayblog-a3a5d.appspot.com',
  messagingSenderId: '1073334566649',
  appId: '1:1073334566649:web:f41f7eb74c2faee5caec28',
  measurementId: 'G-9JKL5TE4SB',
};
// const firebaseConfig = {
//   apiKey: 'AIzaSyDyiyQNCIHeAiVgqPaU-J9Jvs88mv8uIZA',
//   authDomain: 'raychat1-59420.firebaseapp.com',
//   projectId: 'raychat1-59420',
//   storageBucket: 'raychat1-59420.appspot.com',
//   messagingSenderId: '273558404586',
//   appId: '1:273558404586:web:7113c57bc81a6bc2dcc693',
//   measurementId: 'G-VEK40BW2LG',
// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);
