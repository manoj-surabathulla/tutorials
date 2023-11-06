importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBK6OwQA7Nd7JL7q-xoEIyRAPpNPh8JpKI",
  authDomain: "todo-app-a422c.firebaseapp.com",
  projectId: "todo-app-a422c",
  storageBucket: "todo-app-a422c.appspot.com",
  messagingSenderId: "957157950019",
  appId: "1:957157950019:web:8e410c467b8c780c8d0af6",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
