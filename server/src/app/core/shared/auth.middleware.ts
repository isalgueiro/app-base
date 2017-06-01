import { Middleware, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JsonWebTokenError, NotBeforeError, TokenExpiredError, verify } from 'jsonwebtoken';
import { SETTINGS } from './../../../environments/environment';
import { AuthenticationTimeoutException, UnauthorizedException } from './exceptions';

@Middleware()
export class AuthMiddleware implements NestMiddleware {
    public resolve(): (req: Request, res: Response, next: NextFunction) => void {
        return (req: Request, res: Response, next: NextFunction) => {
            const token = this.getToken(req);
            verify(token, SETTINGS.secret, (err, decoded) => {
                if (err) {
                    this.parseError(err);
                    return;
                }
                req['user'] = decoded;
                next();
            });
        };
    }

    private getToken(req: Request): string {
        const auth = req.headers['authorization'];
        const token = auth ? auth.split(' ')[1] : '';
        return token;
    }

    private parseError(error: TokenExpiredError | JsonWebTokenError | NotBeforeError) {
        if (error instanceof TokenExpiredError) {
            throw new AuthenticationTimeoutException('Authentication Timeout');
        }
        throw new UnauthorizedException('Unauthorized'); // Default
    }
}
