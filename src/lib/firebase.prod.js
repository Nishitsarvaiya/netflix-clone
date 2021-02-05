import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// creating Config for Firebase
const config = {
    apiKey: "AIzaSyC3tEuYuAGpM38L8JzYZMEHiEKaVsGCpbk",
    authDomain: "netflix-clone-43bdf.firebaseapp.com",
    projectId: "netflix-clone-43bdf",
    storageBucket: "netflix-clone-43bdf.appspot.com",
    messagingSenderId: "142105320715",
    appId: "1:142105320715:web:7ffff4d1325769043d960e",
};

// Initializing Firebase App with config
const firebase = Firebase.initializeApp(config);

export { firebase };
