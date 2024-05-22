import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBsNWK53AnOCh4HgWgx94XwRqTFZnQ02GE",
    authDomain: "minidevteste.firebaseapp.com",
    projectId: "minidevteste",
    storageBucket: "minidevteste.appspot.com",
    messagingSenderId: "358637304939",
    appId: "1:358637304939:web:ef8174bb0f47969ce1c52e"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  const auth = getAuth(app);

  export { db, auth }