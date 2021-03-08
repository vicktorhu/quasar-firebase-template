export interface FirebaseStateInterface {
  prop: boolean;
}

function state(): FirebaseStateInterface {
  return {
    prop: false
  }
};

export default state;
