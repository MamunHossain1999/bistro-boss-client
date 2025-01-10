import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCklI6coYLRVqHQIw7nZpydYjxSUjgH5S4",
  authDomain: "bistroboss-e0be5.firebaseapp.com",
  projectId: "bistroboss-e0be5",
  storageBucket: "bistroboss-e0be5.firebasestorage.app",
  messagingSenderId: "45208524541",
  appId: "1:45208524541:web:5b9a7eb8c4609203089094"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
