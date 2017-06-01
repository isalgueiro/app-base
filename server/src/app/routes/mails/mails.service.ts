import { Component, HttpStatus } from "@nestjs/common";
import * as nodemailer from 'nodemailer';
import { SETTINGS } from "../../../environments/environment";
import { LoggerService } from "../../core/shared/logger.service";
import { IMessage } from './mail.models';

@Component()
export class MailsService {
  private transporter: any;
  private logger = new LoggerService('MailsService');
  constructor() {
    this.transporter = nodemailer.createTransport(SETTINGS.mailerSettings);
  }

  public sendMail(message: IMessage) {
    return this.transporter.sendMail(message);
  }
}
