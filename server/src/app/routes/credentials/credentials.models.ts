import { ObjectID } from 'mongodb';
import { ROLE } from "../../core/shared/enums";

export interface IUserCredential {
  email: string;
  password: string;
}

export interface IUserToken {
  email: string;
  name: string;
  organizationId: ObjectID;
  roles: ROLE[];
  token: string;
}

export interface IUserInvitation {
  email: string;
  name: string;
  organizationId: ObjectID;
  role: ROLE;
}

export interface IUserGodRegistration {
  email: string;
  name: string;
  password: string;
}

export interface IUserClientRegistration {
  email: string;
  name: string;
  organizationId: ObjectID;
  password: string;
}

export interface IUserPublicRegistration {
  email: string;
  name: string;
  organizationId: ObjectID;
  phone: string;
}

export interface IUserConfirmation {
  id: ObjectID;
  hash: string;
}

export interface IUserActivation {
  id: ObjectID;
  email: string;
}
