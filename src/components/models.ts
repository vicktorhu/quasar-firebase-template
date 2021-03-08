export class User {
  uid: string;
  identifier: string;
  verified: boolean;

  constructor(uid: string, identifier: string, verified: boolean) {
    this.uid = uid;
    this.identifier = identifier;
    this.verified = verified;
  }
}
