// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiSLbEjNuLp1K3AvETupZxrhyilKWzEkY",
  authDomain: "hackathon-practice-34ca7.firebaseapp.com",
  databaseURL: "https://hackathon-practice-34ca7-default-rtdb.firebaseio.com",
  projectId: "hackathon-practice-34ca7",
  storageBucket: "hackathon-practice-34ca7.appspot.com",
  messagingSenderId: "167206234484",
  appId: "1:167206234484:web:f80310026cfed4841be421",
  measurementId: "G-SCPJBBRHFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;