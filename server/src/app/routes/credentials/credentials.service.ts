import { Component } from '@nestjs/common';
import { ObjectID } from 'mongodb';
import { DatabaseService } from '../../core/shared/database.service';
import { UsersService } from '../users/users.service';
import { Credential, ICredentialDocument } from './credential.model';

@Component()
export class CredentialsService {

  constructor(private databaseService: DatabaseService) { }

  public async post(credential: ICredentialDocument): Promise<void> {
    const repository = await this.repository;
    await repository.create(credential);
  }

  public async getByUserIdPassword(userId: string, password: string): Promise<Credential> {
    const repository = await this.repository;
    const credentials = repository.findOne({ userId, password });
    return credentials;
  }

  private get repository() {
    return this.databaseService.repository<ICredentialDocument, Credential>(Credential);
  }

}
