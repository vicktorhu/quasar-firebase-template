import { MutationTree } from "vuex";
import { FirebaseStateInterface } from "./state";

const mutation: MutationTree<FirebaseStateInterface> = {
  setUser(state: FirebaseStateInterface, user) {
    state.currentUser = user;
  },
  logoutUser(state: FirebaseStateInterface) {
    state.currentUser = null;
  },
  setUserNameAfterRegister(state: FirebaseStateInterface, val){
    state.currentUser!.displayName = val;
  }
};

export default mutation;
