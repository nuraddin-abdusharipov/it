import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBy5uZGUSBMDt9i7pq9O_nrm15HaDo5SEw",
  authDomain: "web-site-f3271.firebaseapp.com",
  projectId: "web-site-f3271",
  storageBucket: "web-site-f3271.firebasestorage.app",
  messagingSenderId: "937143279265",
  appId: "1:937143279265:web:b5f141aa909d0b4b781ae0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);