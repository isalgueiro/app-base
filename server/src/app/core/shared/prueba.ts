import { Logger } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ObjectID } from "mongodb";
import { BadRequestException, ForbiddenException, ObjectIDException, UnauthorizedException } from './exceptions';

export const log = function (
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const logger = new Logger(propertyKey);
    logger.log('Estoy aqui');
    const result = originalMethod.apply(this, args);

    return result;
  };

  return descriptor;
};

export const middleware = function (param: ROLE[]) {
  return (
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<any>
  ) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const req: Request = args[0];
      myMiddleware(param, req);
      const result = originalMethod.apply(this, args);

      return result;
    };

    return descriptor;
  };
};

function myMiddleware(roles: ROLE[], req: Request) {
  if ('user' in req) {
    const user = req['user'];
    const isAuth = roles.some(rol => {
      return user.roles.some(userRol => {
        return userRol === rol;
      });
    });
    if (!isAuth) {
      throw new ForbiddenException('');
    }

  } else {
    throw new UnauthorizedException('');
  }
}

/**
   * Determines if object contains all params, the first argument of function must be the object
   * @param params Params to validate
   */
export const validateObject = function (params: string[]) {
  return (
    target: any,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<any>
  ) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      if (!validate(args[0], params)) {
        throw new BadRequestException(`Params ''${params.join(' ')}'' must be send.`);
      }

      const result = originalMethod.apply(this, args);

      return result;
    };
    return descriptor;
  };
};

function validate(object: any, test: string[]): boolean {
  const keys = Object.keys(object);
  /*const isValid = test.every(key => keys.includes(key));*/
  return true;
}

import 'reflect-metadata';
const requiredMetadataKey = Symbol('objectId');

export function objectId(target: object, propertyKey: string | symbol, parameterIndex: number) {

  const existingRequiredParameters: number[] =
    Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  console.log(existingRequiredParameters);
  existingRequiredParameters.push(parameterIndex);
  console.log(existingRequiredParameters);
  Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
  console.log(Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey));
}
import { HttpException } from '@nestjs/core';
import { ROLE } from "./enums";

export function validateO(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  const method = descriptor.value;
  descriptor.value = function () {
    const requiredParameters: number[] =
      Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);

    if (requiredParameters) {
      for (const parameterIndex of requiredParameters) {
        try {
          arguments[parameterIndex] = getObjectID(arguments[parameterIndex]);
        } catch (e) {
          console.log(e instanceof ObjectIDException);
          console.log(e instanceof BadRequestException);
          console.log(e instanceof HttpException);
        }

      }
    }
    return method.apply(this, arguments);
  };
}

function getObjectID(id: string | ObjectID) {
  if (!ObjectID.isValid(id)) {
    throw new ObjectIDException(id);
  }

  return new ObjectID(id);
}
