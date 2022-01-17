import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebaseInit";

const message = getMessaging();

onMessage(message, (payload) => {
  console.log(payload.notification);
});

getToken(messaging, {
  vapidKey:
    `MY_VAPID_KEY`,
})
  .then((currentToken) => {
    onMessage((payload) => {
      console.log(payload.notification);
    });
    if (currentToken) {
      console.log("getToken: " + currentToken);
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
  });

function App() {
  return (
    <div className="App">
      <h1>FCM TEST</h1>
    </div>
  );
}

export default App;
