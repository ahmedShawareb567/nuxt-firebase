import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

export default ({ $config }, inject) => {
  const firebaseConfig = {
    apiKey: `${$config.API_KEY}`,
    authDomain: `${$config.AUTH_DOMAIN}`,
    projectId: `${$config.PROJECT_ID}`,
    storageBucket: `${$config.STORAGE_BUCKET}`,
    messagingSenderId: `${$config.MESSAGING_SENDER_ID}`,
    appId: `${$config.APP_ID}`,
    measurementId: `${$config.MEASUREMENT_ID}`,
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = getAuth(app);

  const fire = {
    auth,
    analytics,
  };

  inject("fire", fire);
};
