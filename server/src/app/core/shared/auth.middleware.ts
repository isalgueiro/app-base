import {
  Body, Controller, Delete, Get, HttpStatus,
  Middleware, NestMiddleware, Param, Post, Query, Req, Res, UseFilters
} from '@nestjs/common';

import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SETTINGS } from "../../../environments/environment";
import { LoggerService } from "../../core/shared/logger.service";
import { UnauthorizedException, UnknowExceptionFilter } from "./exceptions";

@Middleware()
export class AuthMiddleware implements NestMiddleware {
  private readonly EXPIRED_ERROR = "TokenExpiredError";
  private readonly TOKEN_ERROR = "JsonWebTokenError";
  private logger: LoggerService = new LoggerService('AuthMiddleware');
  public resolve() {
    return (req: Request, res: Response, next: NextFunction) => {
      const authHeader = req.headers['authorization'] as string;
      if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (token && token !== 'null') {
          try {
            // https://github.com/kamilmysliwiec/nest/issues/95
            const user = verify(token, SETTINGS.secret);
            req['session'] = user;
            return next();
          } catch (error) {
            this.jwtParseError(error);
          }
        }
      }
      throw new UnauthorizedException('No authorization found');
    };
  }

  private jwtParseError(error) {
    switch (error.name) {
      case this.EXPIRED_ERROR: {
        throw new UnauthorizedException(error.message);
      }
      case this.TOKEN_ERROR: {
        throw new UnauthorizedException(error.message);
      }
    }
  }
}
