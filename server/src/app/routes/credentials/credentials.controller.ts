import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { LoggerService } from "../../core/shared/logger.service";
import { UsersService } from "../users/users.service";
import { CredentialsLogic } from "./credentials.logic";
import {
  IUserActivation,
  IUserClientRegistration, IUserConfirmation,
  IUserCredential, IUserGodRegistration,
  IUserInvitation, IUserPublicRegistration
} from "./credentials.models";

@Controller('credentials')
export class CredentialsController {
  private logger: LoggerService = new LoggerService('CredentialsController');
  constructor(
    private credentialsLogic: CredentialsLogic) { }

  @Post('bigbang')
  public async postUserGodRegistration( @Res() res: Response, @Body() secret: any) {
    if (secret.secret !== 'secret') {
      this.logger.warn('invalid god secret: ' + JSON.stringify(secret));
      res.status(HttpStatus.UNAUTHORIZED).json(secret);
      return;
    }
    const userRegistration: IUserGodRegistration = {
      email: 'admin@agorabinaria.com',
      name: 'Administrator',
      password: 'secret'
    };
    const newUser = await this.credentialsLogic.postUserGodRegistration(userRegistration);
    if (newUser) {
      this.logger.value('newUser', newUser);
      res.status(HttpStatus.CREATED).json(newUser);
    } else {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Not created' });
    }
  }

  @Post('client')
  public async postUserClientRegistration( @Res() res: Response, @Body() userRegistration: IUserClientRegistration) {
    const newUser = await this.credentialsLogic.postUserClientRegistration(userRegistration);
    if (newUser) {
      this.logger.value('newUser', newUser);
      res.status(HttpStatus.CREATED).json(newUser);
    } else {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Not created' });
    }
  }

  @Post('public')
  public async postUserPublicRegistration( @Res() res: Response, @Body() userRegistration: IUserPublicRegistration) {
    const newUser = await this.credentialsLogic.postUserPublicRegistration(userRegistration);
    if (newUser) {
      this.logger.value('newUser', newUser);
      res.status(HttpStatus.CREATED).json(newUser);
    } else {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Not created' });
    }
  }

  @Post('invitation')
  public async postUserInvitation( @Res() res: Response, @Body() userInvitation: IUserInvitation) {
    const newUser = await this.credentialsLogic.postUserInvitation(userInvitation);
    if (newUser) {
      this.logger.value('newUser', newUser);
      res.status(HttpStatus.CREATED).json(newUser);
    } else {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Not created' });
    }
  }

  @Post('confirmation')
  public async postUserConfirmation( @Res() res: Response, @Body() userConfirmation: IUserConfirmation) {
    res.status(HttpStatus.NO_CONTENT).send();
  }

  @Post('activation')
  public async postUserActivation( @Res() res: Response, @Body() userActivation: IUserActivation) {
    res.status(HttpStatus.NO_CONTENT).send();
  }

  @Post()
  public async postCredentials( @Res() res: Response, @Body() userCredential: IUserCredential) {
    this.logger.value('userCredential', userCredential);
    const userToken = await this.credentialsLogic.getUserToken(userCredential);
    res.status(HttpStatus.CREATED).json({ access_token: userToken });
  }

}
