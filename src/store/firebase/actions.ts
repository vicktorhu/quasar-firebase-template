import { ActionTree } from "vuex";
import { StateInterface } from "../index";
import { FirebaseStateInterface } from "./state";
import { User } from "components/models";
import firebase from "firebase/app";
import { Notify } from "quasar";

const actions: ActionTree<FirebaseStateInterface, StateInterface> = {
  register({ commit }, { name, email, password }) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          let user = userCredential.user;
          user!.updateProfile({
            displayName: name,
          });
          firebase
            .auth()
            .currentUser?.sendEmailVerification()
            .then(function () {
              Notify.create(`Verification email sent to ${user?.email}`);
            })
            .catch(function (error) {
              Notify.create("error " + error);
            });
          resolve(true);
        })
        .catch(function (error) {
          Notify.create(error);
          reject(false);
        });
    });
  },
  login({ commit }, { email, password }) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          let user = userCredential.user;
          Notify.create(`Welcome ${user?.displayName}!`);
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
