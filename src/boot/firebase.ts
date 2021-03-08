import { boot } from "quasar/wrappers";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default boot(() => {
  const firebaseConfig = (process.env.environments as any).FIREBASE_CONFIG;

  firebase.initializeApp(firebaseConfig);
  //   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

  //   firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       console.log("logged in");
  //       // User is signed in.
  //     } else {
  //       console.log("not logged in");
  //       // No user is signed in.
  //     }
  //   });
});
