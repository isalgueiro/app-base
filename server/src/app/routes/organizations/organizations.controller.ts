import {
  Body, Controller, Delete, ExceptionFilters,
  Get, HttpStatus, Param, Post, Query, Res, Session
} from '@nestjs/common';
import { Request, Response } from "express";
import { ROLE } from "../../core/shared/enums";
import { LoggerService } from "../../core/shared/logger.service";
import { UsersService } from "../users/users.service";
import { IOrganizationDocument } from './organization.model';
import { OrganizationsService } from "./organizations.service";

@Controller('organizations')
export class OrganizationsController {
  private logger: LoggerService = new LoggerService('OrganizationsController');
  constructor(
    private organizationsService: OrganizationsService,
    private usersService: UsersService
  ) { }

  @Get()
  public async getAll( @Res() res: Response) {
    const organizations = await this.organizationsService.getAll();
    res.status(HttpStatus.OK).json(organizations);
  }

  @Get('/:id/users')
  public async getByIdRole(
    @Res() res: Response,
    @Param('id') id: string, @Query('role') role: string) {
    const organizationUsers = await this.usersService.getByOrganizationRole(id, +role);
    res.status(HttpStatus.OK).json(organizationUsers);
  }

  @Get('count')
  public async getCount( @Res() res: Response) {
    const organizationsCount = await this.organizationsService.getCount();
    res.status(HttpStatus.OK).json({ data: organizationsCount });
  }

  @Post()
  public async post( @Res() res: Response, @Body() organization: IOrganizationDocument) {
    const newOrganization = await this.organizationsService.post(organization);
    if (newOrganization) {
      this.logger.value('newOrganization', newOrganization);
      res.status(HttpStatus.CREATED).json(newOrganization);
    } else {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Not created' });
    }
  }

  @Delete('/:id')
  public async delete( @Res() res: Response, @Param('id') id: string, ) {
    await this.organizationsService.delete(id);
    this.logger.value('deletedOrganization !!!', id);
    res.status(HttpStatus.NO_CONTENT).send();
  }
}
