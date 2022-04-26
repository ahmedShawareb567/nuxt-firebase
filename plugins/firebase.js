// import firebase from "firebase";
// import { getAnalytics } from "firebase/analytics";
// import "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";

export default ({ $config }, inject) => {
  const firebaseConfig = {
    apiKey: `${$config.API_KEY}`,
    authDomain: `${$config.AUTH_DOMAIN}`,
    projectId: `${$config.PROJECT_ID}`,
    storageBucket: `${$config.STORAGE_BUCKET}`,
    messagingSenderId: `${$config.MESSAGING_SENDER_ID}`,
    appId: `${$config.APP_ID}`,
    measurementId: `${$config.MEASUREMENT_ID}`,
    databaseURL: `${$config.DATABASE_URL}`,
  };

  firebase.initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  const auth = firebase.auth();
  const db = firebase.database();
  const firestore = firebase.firestore();

  const fire = {
    auth,
    db,
    firestore,
    // analytics,
  };

  inject("fire", fire);
};
