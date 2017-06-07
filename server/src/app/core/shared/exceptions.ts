import { Catch, ExceptionFilter, HttpStatus, Logger } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { MongoError, ObjectID } from 'mongodb';

/*400*/
export class BadRequestException extends HttpException {
  constructor(msg: string | object) {
    new Logger('BadRequestException').warn(msg.toString());
    super(msg, HttpStatus.BAD_REQUEST);
  }
}

/*401*/
export class UnauthorizedException extends HttpException {
  constructor(msg: string | object) {
    new Logger('v').warn(msg.toString());
    super(msg, HttpStatus.UNAUTHORIZED);
  }
}

/*403*/
export class ForbiddenException extends HttpException {
  constructor(msg: string | object) {
    new Logger('ForbiddenException').warn(msg.toString());
    super(msg, HttpStatus.FORBIDDEN);
  }
}

/*404*/
export class NotFoundException extends HttpException {
  constructor(msg: string | object) {
    new Logger('NotFoundException').warn(msg.toString());
    super(msg, HttpStatus.NOT_FOUND);
  }
}

/*409*/
export class ConflictException extends HttpException {
  constructor(msg: string | object) {
    new Logger('ConflictException').warn(msg.toString());
    super(msg, HttpStatus.CONFLICT);
  }
}

/*410*/
export class GoneException extends HttpException {
  constructor(msg: string | object) {
    new Logger('GoneException').warn(msg.toString());
    super(msg, HttpStatus.GONE);
  }
}

/*419*/
export class AuthenticationTimeoutException extends HttpException {
  constructor(msg: string | object) {
    new Logger('AuthenticationTimeoutException').warn(msg.toString());
    super(msg, 419);
  }
}

/*500*/
export class InternalServerErrorException extends HttpException {
  constructor(msg: string | object) {
    new Logger('InternalServerErrorException').warn(msg.toString());
    super(msg, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export class ObjectIDException extends BadRequestException {
  constructor(id: string) {
    new Logger('ObjectIDException').warn(id);
    super(`Id '${id}' is invalid`);
  }
}

@Catch(Error)
export class UnknowExceptionFilter implements ExceptionFilter {
  public catch(exception, response) {
    let message = 'Unknown Exception';
    Reflect.ownKeys(exception).forEach(k => {
      console.error(`${k}: ${exception[k]}`);
    });

    if (exception instanceof MongoError) {
      const error = mongoError(exception);
      response.status(error.status);
      message = error.message || message;
    } else {
      if (exception.isValidationError || exception.message === invalidId) {
        message = exception.message;
        response.status(HttpStatus.BAD_REQUEST);
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }


    response.json({ message });

  }
}

const duplicateKey = 11000;
const invalidId = 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters';

function mongoError(exception) {
  const error = { message: null, status: null };
  switch (exception.code) {
    case duplicateKey:
      error.message = exception.message;
      error.status = HttpStatus.CONFLICT;
      break;

    default:
      error.status = HttpStatus.INTERNAL_SERVER_ERROR;
      break;
  }

  return error;
}
