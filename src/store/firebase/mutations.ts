import { MutationTree } from 'vuex';
import { FirebaseStateInterface } from './state';

const mutation: MutationTree<FirebaseStateInterface> = {
  updateProp (state: FirebaseStateInterface, val) {
    // your code
    state.prop = val;
  }
};

export default mutation;
