
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAIQ8fZrhokWteW2hI9A72DZe4l03Sr5Ac",
  authDomain: "phase-2-project-ab697.firebaseapp.com",
  projectId: "phase-2-project-ab697",
  storageBucket: "phase-2-project-ab697.appspot.com",
  messagingSenderId: "130312423750",
  appId: "1:130312423750:web:d0c6d8097771706e303d47"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { app, auth };