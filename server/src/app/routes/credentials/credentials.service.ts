import { Component } from '@nestjs/common';
import { ObjectID } from 'mongodb';
import { Repository } from 'typeorm';
import { DatabaseService } from '../../core/shared/database.service';
import { User } from "../users/user.entity";
import { UsersService } from '../users/users.service';
import { Credential } from './credential.entity';

@Component()
export class CredentialsService {

  constructor(private databaseService: DatabaseService) { }

  private get repository(): Promise<Repository<Credential>> {
    return this.databaseService.getRepository(Credential);
  }

  public async post(credential: Credential): Promise<void> {
    const repository = await this.repository;
    await repository.persist(credential);
  }

  public async getByUserIdPassword(userId: ObjectID, password: string): Promise<Credential> {
    const repository = await this.repository;
    const credentials = repository.findOne({ userId, password });
    return credentials;
  }

}
