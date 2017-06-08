export interface IUserToken {
  email: string;
  name: string;
  organizationId: string;
  roles: ROLE[];
  token: string;
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
