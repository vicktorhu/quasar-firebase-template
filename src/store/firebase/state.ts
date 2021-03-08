import { User } from "components/models";

export interface FirebaseStateInterface {
  prop: boolean;
  currentUser: User | null;
}

function state(): FirebaseStateInterface {
  return {
    prop: false,
    currentUser: null,
  };
}

export default state;