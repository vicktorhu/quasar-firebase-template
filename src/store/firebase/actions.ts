import { ActionTree } from "vuex";
import { StateInterface } from "../index";
import { FirebaseStateInterface } from "./state";
import { User } from "components/models";
import firebase from "firebase/app";
import { Notify } from "quasar";

const actions: ActionTree<FirebaseStateInterface, StateInterface> = {
  login({ commit }, { email, password }) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          Notify.create(`Welcome ${user?.email}`);
          resolve(true);
        })
        .catch(function (error) {
          Notify.create(error);
          reject(false);
        });
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
        Notify.create(error);
      });
  },
  sendRecoveryEmail({}, email) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(function () {
          Notify.create("Recovery email sent");
          resolve(true);
        })
        .catch(function (error) {
          Notify.create(error);
          reject(false);
        });
    });
  },
};

export default actions;
