import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaTey9MqtcQWCLBA6I0DIbizzF3rxijuU",
  authDomain: "crud-fire-react-c5d6b.firebaseapp.com",
  projectId: "crud-fire-react-c5d6b",
  storageBucket: "crud-fire-react-c5d6b.appspot.com",
  messagingSenderId: "675698516729",
  appId: "1:675698516729:web:09e925a43c6bbdc73a7828"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;