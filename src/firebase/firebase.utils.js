import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDpkhbsyUdECWRmjTu7j77VnWym4M6MpuQ",
    authDomain: "store-shop-db.firebaseapp.com",
    projectId: "store-shop-db",
    storageBucket: "store-shop-db.appspot.com",
    messagingSenderId: "813191857653",
    appId: "1:813191857653:web:01f22de8a259a3cbe3ccbc",
    measurementId: "G-KQFV22677F"
  }

  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;