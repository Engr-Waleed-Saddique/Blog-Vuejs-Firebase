import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKOa8ZW3OcE5_orTbg8pAzsZmb0t9tpmw",
    authDomain: "blog-9ac22.firebaseapp.com",
    projectId: "blog-9ac22",
    storageBucket: "blog-9ac22.appspot.com",
    messagingSenderId: "895245052684",
    appId: "1:895245052684:web:fa90bf36c71165a7e47729"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export {timestamp};
  export default firebaseApp.firestore();
  