import { Body, Controller, Delete, ExceptionFilters, Get, HttpStatus, Param, Post, Res, Session } from '@nestjs/common';
import { Request, Response } from 'express';
import { InternalServerErrorException } from '../../core/shared/exceptions';
import { UnknowExceptionFilter } from './../../core/shared/exceptions';
import { UsersService } from './users.service';

@ExceptionFilters(UnknowExceptionFilter)
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    public async getAll( @Res() res: Response) {
        const users = await this.usersService.getAll();
        res.status(HttpStatus.OK).json(users);
    }

    @Get('/:id')
    public async getById( @Res() res: Response, @Param('id') id: string) {
        const user = await this.usersService.getById(id);
        if (user) {
            res.status(HttpStatus.OK).json(user);
        } else {
            res.status(HttpStatus.NOT_FOUND).json({ message: 'User not found' });
        }
    }

    @Delete('/:id')
    public async remove( @Res() res: Response, @Param('id') id: string) {
        await this.usersService.remove(id);
        res.status(HttpStatus.NO_CONTENT).send();
    }
}
