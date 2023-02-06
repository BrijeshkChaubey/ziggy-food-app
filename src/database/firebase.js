import {initializeApp} from 'firebase/app';
import {initializeFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBXSptVXgoXmuijew3dOiUfl3aGIocc0y8',
  authDomain: 'ziggy-7038f.firebaseapp.com',
  projectId: 'ziggy-7038f',
  storageBucket: '"ziggy-7038f.appspot.com"',
  messagingSenderId: '967194841636',
  appId: "1:967194841636:android:a40e7cdb2c25ad45a4beb1",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export {db, auth};
