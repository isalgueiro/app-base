import { Component } from "@nestjs/common";
import { sign } from 'jsonwebtoken';
import { SETTINGS } from '../../../environments/environment';
import { ROLE, STATUS } from "../../core/shared/enums";
import { BadRequestException, NotFoundException } from '../../core/shared/exceptions';
import { LoggerService } from "../../core/shared/logger.service";
import { UsersService } from "../users/users.service";
import { IUserDocument, User } from './../users/user.model';
import { ICredentialDocument } from './credential.model';
import {
  IUserClientRegistration, IUserCredential, IUserGodRegistration, IUserInvitation, IUserPublicRegistration, IUserToken
} from "./credentials.models";
import { CredentialsService } from "./credentials.service";

@Component()
export class CredentialsLogic {
  private logger: LoggerService = new LoggerService('CredentialsLogic');
  constructor(
    private credentialsService: CredentialsService,
    private usersService: UsersService) { }

  public async postUserClientRegistration(userRegistration: IUserClientRegistration) {
    let newUser = this.createUserFromUserClientRegistration(userRegistration);
    newUser = await this.usersService.post(newUser);
    newUser = await this.postCredential(newUser, userRegistration.password);
    this.sendConfirmationEmail(newUser);
    return newUser;
  }
  public async postUserGodRegistration(userGodRegistration: IUserGodRegistration) {
    let newUser = this.createUserFromUserGodRegistration(userGodRegistration);
    newUser = await this.usersService.post(newUser);
    newUser = await this.postCredential(newUser, userGodRegistration.password);
    this.sendConfirmationEmail(newUser);
    return newUser;
  }

  public async postUserPublicRegistration(userRegistration: IUserPublicRegistration) {
    let newUser = this.createUserFromUserPublicRegistration(userRegistration);
    newUser = await this.usersService.post(newUser);
    this.sendConfirmationEmail(newUser);
    return newUser;
  }

  public async postUserInvitation(userInvitation: IUserInvitation) {
    let newUser = this.createUserFromUserInvitation(userInvitation);
    newUser = await this.usersService.post(newUser);
    this.sendConfirmationEmail(newUser);
    return newUser;
  }

  public async getUserToken(userCredential: IUserCredential): Promise<IUserToken> {
    const user = await this.usersService.getByEmail(userCredential.email);
    if (!user) {
      throw new NotFoundException('Invalid User');
    }
    const credential = await this.credentialsService.getByUserIdPassword(user._id, userCredential.password);
    if (!credential) {
      throw new NotFoundException('Invalid Credential');
    }
    const token = sign(credential, SETTINGS.secret);
    const userToken: IUserToken = {
      name: user.name,
      email: user.email,
      organizationId: user.organizationId,
      roles: user.roles,
      token
    };
    return userToken;
  }

  private createUserFromUserGodRegistration(userRegistration: IUserGodRegistration) {
    const newUser: IUserDocument = {
      email: userRegistration.email,
      name: userRegistration.name,
      roles: [ROLE.GOD],
      status: STATUS.ACTIVE
    };
    return newUser;
  }

  private createUserFromUserClientRegistration(userRegistration: IUserClientRegistration) {
    const newUser: IUserDocument = {
      email: userRegistration.email,
      organizationId: userRegistration.organizationId,
      name: userRegistration.name,
      roles: [ROLE.CLIENT],
      status: STATUS.PENDING
    };
    return newUser;
  }

  private createUserFromUserPublicRegistration(userRegistration: IUserPublicRegistration) {
    const newUser: IUserDocument = {
      email: userRegistration.email,
      organizationId: userRegistration.organizationId,
      name: userRegistration.name,
      phone: userRegistration.phone,
      roles: [ROLE.PUBLIC],
      status: STATUS.PENDING
    };
    return newUser;
  }

  private createUserFromUserInvitation(userInvitation: IUserInvitation) {
    const newUser: IUserDocument = {
      email: userInvitation.email,
      organizationId: userInvitation.organizationId,
      name: userInvitation.name,
      roles: [userInvitation.role],
      status: STATUS.PENDING
    };
    return newUser;
  }

  private async postCredential(newUser: IUserDocument, password: string) {
    const credential: ICredentialDocument = {
      userId: newUser._id,
      password
    };

    try {
      await this.credentialsService.post(credential);
    } catch (err) {
      this.logger.error(err);
      await this.usersService.remove(newUser._id);
      newUser = null;
    }
    return newUser;
  }

  private async sendConfirmationEmail(newUser: IUserDocument): Promise<boolean> {
    return true;
  }
}
