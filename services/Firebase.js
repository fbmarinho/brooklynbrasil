import * as firebase from "firebase";
import {
  FB_API_KEY,
  FB_AUTH_DOMAIN,
  FB_DB_URL,
  FB_PROJECT_ID,
  FB_STORAGE_BUCKET,
  FB_MESSAGING_SENDER_ID,
  FB_APP_ID
} from "react-native-dotenv";

console.log(FB_API_KEY);

var firebaseConfig = {
  apiKey: FB_API_KEY,
  authDomain: FB_AUTH_DOMAIN,
  databaseURL: FB_DB_URL,
  projectId: FB_PROJECT_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_MESSAGING_SENDER_ID,
  appId: FB_APP_ID
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export default fb;
