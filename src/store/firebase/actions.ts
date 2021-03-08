import { ActionTree } from "vuex";
import { StateInterface } from "../index";
import { FirebaseStateInterface } from "./state";
import { User } from "components/models";
import firebase from "firebase/app";

const actions: ActionTree<FirebaseStateInterface, StateInterface> = {
  login({ commit }, {email, password}) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
      })
      .catch((error) => {
        console.log(`${error.code} - ${error.message}`);
      });
  },
  logout({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit("setUser", null);
      })
      .catch((error) => {
        console.log(`${error.code} - ${error.message}`);
      });
  },
};

export default actions;
