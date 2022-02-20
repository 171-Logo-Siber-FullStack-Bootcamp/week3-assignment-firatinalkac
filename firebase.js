// Import the functions you need from the SDKs you need
import fireBase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfEtMKXJ_BMYBEW1twP7VCakk6GGQLR4M",
    authDomain: "fir-auth-b7fd0.firebaseapp.com",
    projectId: "fir-auth-b7fd0",
    storageBucket: "fir-auth-b7fd0.appspot.com",
    messagingSenderId: "1823271094",
    appId: "1:1823271094:web:3a0ae341adb29978969e17"
};

// Initialize Firebase
let app;
if(fireBase.apps.length === 0) {
    app = fireBase.initializeApp(firebaseConfig);
} else {
    app = fireBase.app()
}

const auth = fireBase.auth()

export { auth }