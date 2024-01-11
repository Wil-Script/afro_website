import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyCHy7VLBrCZAYmGnZGY2XC3KbFQqL1SBwQ",
    authDomain: "afrolingo-3413a.firebaseapp.com",
    projectId: "afrolingo-3413a",
    storageBucket: "afrolingo-3413a.appspot.com",
    messagingSenderId: "395232826997",
    appId: "1:395232826997:web:3cb9d6706bd33e89d0ca3c",
    measurementId: "G-CGLYK89FX5",
  };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  let app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

  const storage = getStorage(app);

  const auth = getAuth(app);
  const firestore = getFirestore(app);
  // const firestoreDB = getFirestore(app)

  // nuxtApp.vueApp.provide("storage", storage);
  nuxtApp.provide("firebase_app", app);

  // nuxtApp.vueApp.provide("storage", storage);
  nuxtApp.provide("storage", storage);

  // nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);

  // nuxtApp.vueApp.provide("firestore", firestore);
  nuxtApp.provide("firestore", firestore);
});
