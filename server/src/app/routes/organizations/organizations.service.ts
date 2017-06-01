import { Component } from "@nestjs/common";
import { Repository } from "typeorm";
import { ObjectId, ValidateParams } from "../../core/decorators/validate-param";
import { DatabaseService } from "../../core/shared/database.service";
import { LoggerService } from "../../core/shared/logger.service";
import { Organization } from "./organization.entity";

@Component()
export class OrganizationsService {
  private logger: LoggerService = new LoggerService('OrganizationsService');
  private get repository(): Promise<Repository<Organization>> {
    return this.databaseService.getRepository(Organization);
  }

  constructor(private databaseService: DatabaseService) { }

  public async getAll(): Promise<Organization[]> {
    const repository = await this.repository;
    const organizations = await repository.find();
    return organizations;
  }

  public async getCount(): Promise<number> {
    const repository = await this.repository;
    const organizationsCount = await repository.count();
    return organizationsCount;
  }

  public async post(organization: Organization): Promise<Organization> {
    const repository = await this.repository;
    const newOrganization = await repository.persist(organization);
    return newOrganization;
  }
  @ValidateParams
  public async delete( @ObjectId id: string): Promise<void> {
    this.logger.log(id);
    const repository = await this.repository;
    const orgExists = await repository.findOneById(id);
    if (orgExists) {
      await repository.removeById(id);
    } else {
      this.logger.value('Not found while deleting', id);
    }
  }
}
