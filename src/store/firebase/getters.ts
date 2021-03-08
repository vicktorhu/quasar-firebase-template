import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { FirebaseStateInterface } from './state';

const getters: GetterTree<FirebaseStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
