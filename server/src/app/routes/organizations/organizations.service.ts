import { Component } from "@nestjs/common";
import { DatabaseService } from "../../core/shared/database.service";
import { LoggerService } from "../../core/shared/logger.service";
import { IOrganizationDocument, Organization } from './organization.model';

@Component()
export class OrganizationsService {
  private logger: LoggerService = new LoggerService('OrganizationsService');

  constructor(private databaseService: DatabaseService) { }

  public async getAll(): Promise<IOrganizationDocument[]> {
    const repository = await this.repository;
    const organizations = await repository.find().map(doc => doc.document);
    return organizations;
  }

  public async getCount(): Promise<number> {
    const repository = await this.repository;
    const organizationsCount = await repository.count();
    return organizationsCount;
  }

  public async post(organization: IOrganizationDocument): Promise<IOrganizationDocument> {
    const repository = await this.repository;
    const newOrganization = await repository.create(organization);
    return newOrganization;
  }

  public async delete(id: string): Promise<void> {
    this.logger.log(id);
    const repository = await this.repository;
    const orgExists = await repository.findOne(id);
    if (orgExists) {
      await repository.remove(id);
    } else {
      this.logger.value('Not found while deleting', id);
    }
  }

  private get repository() {
    return this.databaseService.repository<IOrganizationDocument, Organization>(Organization);
  }
}
