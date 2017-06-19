import { Component } from '@nestjs/common';
import { ROLE } from "../../core/shared/enums";
import { LoggerService } from "../../core/shared/logger.service";
import { DatabaseService } from './../../core/shared/database.service';
import {
  BadRequestException, ConflictException,
  GoneException, NotFoundException,
  ObjectIDException
} from './../../core/shared/exceptions';
import { IUserDocument, User } from './user.model';

@Component()
export class UsersService {
  private logger: LoggerService = new LoggerService('UsersService');

  constructor(private databaseService: DatabaseService) { }

  public async getAll(): Promise<IUserDocument[]> {
    const repository = await this.repository;
    const users = await repository.find().map(doc => doc.document);
    return users;
  }

  public async getById(id: string): Promise<IUserDocument> {
    const repository = await this.repository;
    const user = await repository.findOne(id);
    return user;
  }

  public async getByEmail(email: string): Promise<IUserDocument> {
    const repository = await this.repository;
    const user = await repository.findOne({ email });
    return user;
  }

  public async post(newUser: IUserDocument): Promise<IUserDocument> {
    const repository = await this.repository;
    const savedUser = await repository.insert(newUser);
    return savedUser;
  }

  public async remove(id: string): Promise<void> {
    const repository = await this.repository;
    const userExists = await repository.findOne(id);
    if (userExists) {
      await repository.remove(id);
    }
  }

  public async getByOrganizationRole(organizationId: string, role: ROLE): Promise<IUserDocument[]> {
    const repository = await this.repository;
    const organizationUsers = await repository.find({ organizationId, roles: role }).map(doc => doc.document);
    return organizationUsers;
  }

  private get repository() {
    return this.databaseService.repository<IUserDocument, User>(User);
  }
}
