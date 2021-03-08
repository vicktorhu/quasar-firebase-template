import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { FirebaseStateInterface } from './state';

const actions: ActionTree<FirebaseStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
