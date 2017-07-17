"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var message_model_1 = require("app/core/shared/_data/message.model");
var BusService = (function () {
    function BusService() {
        this.message$ = new Subject_1.Subject();
        this.securityErr$ = new Subject_1.Subject();
        this.userToken$ = new BehaviorSubject_1.BehaviorSubject(null);
        this.user$ = new BehaviorSubject_1.BehaviorSubject(null);
        this.pageSchema$ = new Subject_1.Subject();
    }
    BusService.prototype.getMessage$ = function () {
        return this.message$.asObservable();
    };
    BusService.prototype.getSecurityErr$ = function () {
        return this.securityErr$.asObservable();
    };
    BusService.prototype.getUser$ = function () {
        return this.user$.asObservable();
    };
    BusService.prototype.getUserToken$ = function () {
        return this.userToken$.asObservable();
    };
    BusService.prototype.getPageSchema$ = function () {
        return this.pageSchema$.asObservable();
    };
    BusService.prototype.emit = function (message) {
        this.message$.next(message);
    };
    BusService.prototype.emitHttpError = function (error) {
        var errMsg = this.getMessageFromError(error);
        this.emit({ level: message_model_1.Level.ERROR, text: errMsg });
    };
    BusService.prototype.emitSecurityError = function (error) {
        var errMsg = this.getMessageFromError(error);
        this.emit({ level: message_model_1.Level.WARNING, text: errMsg });
        this.securityErr$.next(errMsg);
    };
    BusService.prototype.emitUser = function (user) {
        console.log('emitUser:', JSON.stringify(user));
        this.user$.next(user);
    };
    BusService.prototype.emitUserToken = function (userToken) {
        console.log('emitUserToken:', userToken);
        this.userToken$.next(userToken);
    };
    BusService.prototype.emitPageSchema = function (schema) {
        console.log('emitPageSchema:', schema);
        this.pageSchema$.next(schema);
    };
    BusService.prototype.getMessageFromError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            errMsg = this.getMessageFromResponse(error);
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.warn(errMsg);
        return errMsg;
    };
    BusService.prototype.getMessageFromResponse = function (error) {
        var body = error.json() || '';
        var errMsg = error.status + " - " + (error.statusText || '') + " " + body;
        return errMsg;
    };
    BusService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], BusService);
    return BusService;
}());
exports.BusService = BusService;
//# sourceMappingURL=bus.service.js.map