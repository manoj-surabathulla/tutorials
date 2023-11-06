import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBK6OwQA7Nd7JL7q-xoEIyRAPpNPh8JpKI",
  authDomain: "todo-app-a422c.firebaseapp.com",
  projectId: "todo-app-a422c",
  storageBucket: "todo-app-a422c.appspot.com",
  messagingSenderId: "957157950019",
  appId: "1:957157950019:web:8e410c467b8c780c8d0af6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const messaging = getMessaging();
export const analytics = getAnalytics(app);
