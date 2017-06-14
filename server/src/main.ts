import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { join } from 'path';
import { AppModule } from './app/app.module';
import { NotFoundException } from './app/core/shared/exceptions';
import { SETTINGS } from './environments/environment';

const logger = new Logger('Main');
const instance = express();
instance.use(bodyParser.json());
instance.use(cors());
instance.use(express.static(SETTINGS.path));




const app = NestFactory.create(AppModule, instance);
instance.all('/', function (req, res) {
    res.sendFile(join(SETTINGS.path, 'index.html'));
});

instance.use(function (req, res) {
    res.sendFile(join(SETTINGS.path, 'index.html'));
});
app.listen(SETTINGS.port, () => logger.log(`Application is listening on port ${SETTINGS.port}`));
