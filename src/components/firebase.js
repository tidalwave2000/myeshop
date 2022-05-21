import firebase from "./firebase";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCREwZJKHvEKyKpPOP1utUzOeXaAGLXoUk",
	authDomain: "myshop-448c8.firebaseapp.com",
	projectId: "myshop-448c8",
	storageBucket: "myshop-448c8.appspot.com",
	messagingSenderId: "445080688836",
	appId: "1:445080688836:web:42bcaaa60e28d2a7249191",
	measurementId: "G-VXLDRMZ2L9",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = firebase.auth();



export { db, auth};