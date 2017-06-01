import { Component } from "@nestjs/common";
import { sign } from 'jsonwebtoken';
import { SETTINGS } from '../../../environments/environment';
import { ROLE, STATUS } from "../../core/shared/enums";
import { BadRequestException, NotFoundException } from '../../core/shared/exceptions';
import { LoggerService } from "../../core/shared/logger.service";
import { User } from "../users/user.entity";
import { UsersService } from "../users/users.service";
import { Credential } from "./credential.entity";
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

  public async postUserClientRegistration(userRegistration: IUserClientRegistration): Promise<User> {
    let newUser = this.createUserFromUserClientRegistration(userRegistration);
    newUser = await this.usersService.post(newUser);
    newUser = await this.postCredential(newUser, userRegistration.password);
    this.sendConfirmationEmail(newUser);
    return newUser;
  }
  public async postUserGodRegistration(userGodRegistration: IUserGodRegistration): Promise<User> {
    let newUser = this.createUserFromUserGodRegistration(userGodRegistration);
    newUser = await this.usersService.post(newUser);
    newUser = await this.postCredential(newUser, userGodRegistration.password);
    this.sendConfirmationEmail(newUser);
    return newUser;
  }

  public async postUserPublicRegistration(userRegistration: IUserPublicRegistration): Promise<User> {
    let newUser = this.createUserFromUserPublicRegistration(userRegistration);
    newUser = await this.usersService.post(newUser);
    this.sendConfirmationEmail(newUser);
    return newUser;
  }

  public async postUserInvitation(userInvitation: IUserInvitation): Promise<User> {
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
    const credential = await this.credentialsService.getByUserIdPassword(user.id, userCredential.password);
    if (!credential) {
      throw new NotFoundException('Invalid Credential');
    }
    const token = sign(credential, SETTINGS.secret);
    const userToken: IUserToken = {
      name: user.name,
      email: user.email,
      organizationId: user.organizationId,
      roles: user.roles,
      token: token
    }
    return userToken;
  }

  private createUserFromUserGodRegistration(userRegistration: IUserGodRegistration): User {
    const newUser = new User();
    newUser.email = userRegistration.email;
    newUser.name = userRegistration.name;
    newUser.roles = [ROLE.GOD];
    newUser.status = STATUS.ACTIVE;
    return newUser;
  }

  private createUserFromUserClientRegistration(userRegistration: IUserClientRegistration): User {
    const newUser = new User();
    newUser.email = userRegistration.email;
    newUser.organizationId = userRegistration.organizationId;
    newUser.name = userRegistration.name;
    newUser.roles = [ROLE.CLIENT];
    newUser.status = STATUS.PENDING;
    return newUser;
  }

  private createUserFromUserPublicRegistration(userRegistration: IUserPublicRegistration): User {
    const newUser = new User();
    newUser.email = userRegistration.email;
    newUser.organizationId = userRegistration.organizationId;
    newUser.name = userRegistration.name;
    newUser.phone = userRegistration.phone;
    newUser.roles = [ROLE.PUBLIC];
    newUser.status = STATUS.PENDING;
    return newUser;
  }

  private createUserFromUserInvitation(userInvitation: IUserInvitation): User {
    const newUser = new User();
    newUser.email = userInvitation.email;
    newUser.organizationId = userInvitation.organizationId;
    newUser.name = userInvitation.name;
    newUser.roles = [userInvitation.role];
    newUser.status = STATUS.PENDING;
    return newUser;
  }

  private async postCredential(newUser: User, password: string) {
    const credential = new Credential();
    credential.userId = newUser.id;
    credential.password = password;
    try {
      await this.credentialsService.post(credential);
    } catch (err) {
      this.logger.error(err);
      await this.usersService.remove(newUser.id);
      newUser = null;
    }
    return newUser;
  }

  private async sendConfirmationEmail(newUser: User): Promise<boolean> {
    return true;
  }
}
