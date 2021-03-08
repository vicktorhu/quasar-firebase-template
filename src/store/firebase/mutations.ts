import { MutationTree } from "vuex";
import { FirebaseStateInterface } from "./state";

const mutation: MutationTree<FirebaseStateInterface> = {
  updateProp(state: FirebaseStateInterface, val) {
    // your code
    state.prop = val;
  },
  setUser(state: FirebaseStateInterface, user) {
    state.currentUser = user;
  },
  logoutUser(state: FirebaseStateInterface) {
    state.currentUser = null;
  },
};

export default mutation;
