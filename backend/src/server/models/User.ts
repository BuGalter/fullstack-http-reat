export interface IUser {
  readonly id: number;
  readonly name: string;
  isActive: boolean;
}

export class User implements IUser {
  readonly id: number;

  readonly name: string;

  isActive: boolean;

  constructor(userId, userName, isActive = false) {
    this.id = userId;
    this.name = userName;
    this.isActive = isActive;
  }
}
