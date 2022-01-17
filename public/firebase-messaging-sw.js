importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

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
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: 'https://evoclass.ai/3f6b4f2fa3ab106a83dc.ico'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});