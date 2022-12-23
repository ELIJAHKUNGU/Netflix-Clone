
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhLhJUVP_aID4niHNVjD61HUg1c-aoZ_k",
  authDomain: "react-netflix-clone-f8b6d.firebaseapp.com",
  projectId: "react-netflix-clone-f8b6d",
  storageBucket: "react-netflix-clone-f8b6d.appspot.com",
  messagingSenderId: "578931881944",
  appId: "1:578931881944:web:4f603cdfc72f15ff3ae4ad",
  measurementId: "G-KZRQ06ST2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);