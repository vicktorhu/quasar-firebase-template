import { User } from "components/models";

export interface FirebaseStateInterface {
  currentUser: User | null;
}

function state(): FirebaseStateInterface {
  return {
    currentUser: null,
  };
}

export default state;