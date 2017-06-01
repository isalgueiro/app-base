import { Component } from '@nestjs/common';
import { ObjectID } from 'mongodb';
import { Repository } from 'typeorm';
import { ObjectId, ValidateParams } from "../../core/decorators/validate-param";
import { ROLE } from "../../core/shared/enums";
import { LoggerService } from "../../core/shared/logger.service";
import { ValidateObject } from './../../core/decorators/validate-object';
import { DatabaseService } from './../../core/shared/database.service';
import {
  BadRequestException, ConflictException,
  GoneException, NotFoundException,
  ObjectIDException
} from './../../core/shared/exceptions';
import { User } from './user.entity';

@Component()
export class UsersService {
  private logger: LoggerService = new LoggerService('UsersService');
  private get repository(): Promise<Repository<User>> {
    return this.databaseService.getRepository(User);
  }

  constructor(private databaseService: DatabaseService) { }

  public async getAll(): Promise<User[]> {
    const repository = await this.repository;
    const users = await repository.find();
    return users;
  }

  @ValidateParams
  public async getById( @ObjectId id: string): Promise<User> {
    const repository = await this.repository;
    const user = await repository.findOneById(id);
    return user;
  }

  public async getByEmail(email: string): Promise<User> {
    const repository = await this.repository;
    const user = await repository.findOne({ email });
    return user;
  }

  @ValidateObject(['email'])
  public async post(newUser: User): Promise<User> {
    const repository = await this.repository;
    const userExists = await repository.findOne({ email: newUser.email });
    if (userExists) {
      throw new ConflictException(`Email ''${newUser.email}'' exists.`);
    }
    const savedUser = await repository.persist(newUser);
    return savedUser;
  }

  @ValidateParams
  public async remove( @ObjectId id: string | ObjectID): Promise<void> {
    const repository = await this.repository;
    const userExists = await repository.findOneById(id);
    if (userExists) {
      await repository.removeById(id);
    }
  }

  public async getByOrganizationRole(organizationId: string, role: ROLE): Promise<User[]> {
    const repository = await this.repository;
    const organizationUsers = await repository.find({ organizationId, roles: role });
    return organizationUsers;
  }
}
