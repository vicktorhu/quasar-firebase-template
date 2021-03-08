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
