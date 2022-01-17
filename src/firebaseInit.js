import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
  apiKey: "암호화된 키값",
  authDomain: "imap-push-server.firebaseapp.com",
  databaseURL: "https://imap-push-server.firebaseio.com",
  projectId: "imap-push-server",
  storageBucket: "imap-push-server.appspot.com",
  messagingSenderId: "숫자로 된 개인 아이디",
};

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
