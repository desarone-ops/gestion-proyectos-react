import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCpcdDqy2S0o3QKliUBiHaJyJRfS0WNxLc",
  authDomain: "gestionproyectos-efd5f.firebaseapp.com",
  projectId: "gestionproyectos-efd5f",
  storageBucket: "gestionproyectos-efd5f.firebasestorage.app",
  messagingSenderId: "969849311161",
  appId: "1:969849311161:web:279505e0e5e0db3704b068"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const functions = getFunctions(app);

export default app;