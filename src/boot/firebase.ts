import { boot } from "quasar/wrappers";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { User } from "components/models";

export default boot(({ store }) => {
  const firebaseConfig = (process.env.environments as any).FIREBASE_CONFIG;

  firebase.initializeApp(firebaseConfig);

  // Check if user signed in before. If yes set currentUser state in vuex
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      const currentUser: User = new User(
        user.uid,
        user.email!,
        user.emailVerified
      );
      store.commit("firebase/setUser", currentUser);
    }
  });
});
