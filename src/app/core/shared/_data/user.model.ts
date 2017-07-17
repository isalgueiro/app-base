export interface IUser {
  email: string;
  name: string;
  organizationId: string;
  roles: ROLE[];
}

export enum ROLE {
  ADMIN = 'ADMIN',
  CLIENT = 'CLIENT',
  GOD = 'GOD',
  PUBLIC = 'PUBLIC',
}

export enum STATUS {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
  CANCELED = 'CANCELED'
}
