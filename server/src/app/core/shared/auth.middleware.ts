import {
  Body, Controller, Delete, Get, HttpStatus,
  Middleware, NestMiddleware, Param, Post, Query, Req, Res
} from '@nestjs/common';

import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SETTINGS } from "../../../environments/environment";
import { LoggerService } from "../../core/shared/logger.service";
import { NotFoundException } from "./exceptions";
@Middleware()
export class AuthMiddleware implements NestMiddleware {
  private logger: LoggerService = new LoggerService('AuthMiddleware');
  public resolve() {
    return (req: Request, res: Response, next: NextFunction) => {
      const authHeader = req.headers['authorization'] as string;
      this.logger.value('authHeader', authHeader);
      if (!authHeader) {
        throw new NotFoundException('Authorization not provide');
      }
      const token = authHeader.split(' ')[1];
      if (!token) {
        throw new NotFoundException('Authorization not provide');
      }
      const user = verify(token, SETTINGS.secret);
      req['session'] = user;
      next();
    };
  }
}
