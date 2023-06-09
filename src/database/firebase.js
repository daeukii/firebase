// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 인증을 위한 getAuth 가져옴
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH,
    projectId: "ex-firebase-adb8c",
    storageBucket: "ex-firebase-adb8c.appspot.com",
    messagingSenderId: "1094014992068",
    appId: "1:1094014992068:web:005a5851460ece83651391",
   
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 사용하고자하는 서비스를 들고와서 사용
// 인증서비스에 관한 내용 들고와서 사용
export const auth = getAuth(app);
