import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { InternalServerErrorException } from '../../core/shared/exceptions';
import { log, middleware } from './../../core/shared/prueba';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    public async getAll( @Req() req: Request, @Res() res: Response) {
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
