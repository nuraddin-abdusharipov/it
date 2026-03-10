import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBkTjA5OMXSb3GPQ79dgyPnfFbOwHC8-BM",
  authDomain: "itparktest-e87a5.firebaseapp.com",
  projectId: "itparktest-e87a5",
  storageBucket: "itparktest-e87a5.firebasestorage.app",
  messagingSenderId: "44851601107",
  appId: "1:44851601107:web:d3e26b95384fa66a653e26",
  measurementId: "G-F44JG3VXMN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
