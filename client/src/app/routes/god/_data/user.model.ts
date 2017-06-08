export interface IUser {
  email: string;
  name: string;
  organizationId: string;
  roles: ROLE[];
}

export enum ROLE {
  ADMIN,
  CLIENT,
  GOD,
  ORGANIZER,
  PUBLIC,
  USHER,
}

export enum STATUS {
  PENDING,
  CONFIRMED,
  ACTIVE,
  DISABLED,
  CANCELED
}
