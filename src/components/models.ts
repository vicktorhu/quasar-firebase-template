export class User {
  uid: string;
  identifier: string;
  displayName: string;
  verified: boolean;

  constructor(
    uid: string,
    identifier: string,
    displayName: string,
    verified: boolean
  ) {
    this.uid = uid;
    this.identifier = identifier;
    this.displayName = displayName;
    this.verified = verified;
  }
}

export class Post {
  id: string;
  uid: string;
  text: string;

  constructor(id: string, uid: string, text: string) {
    this.id = id;
    this.uid = uid;
    this.text = text;
  }
}
