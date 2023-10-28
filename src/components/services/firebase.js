import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAeD0bMSzQvSaVFpn5pprBQxiiQm1BMrxw",
    authDomain: "eureka-react-bordon.firebaseapp.com",
    projectId: "eureka-react-bordon",
    storageBucket: "eureka-react-bordon.appspot.com",
    messagingSenderId: "418232428931",
    appId: "1:418232428931:web:aa5edf0ebb52ad371eeeb6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)