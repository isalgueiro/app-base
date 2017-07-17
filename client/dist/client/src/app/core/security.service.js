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
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var bus_service_1 = require("./bus.service");
var router_1 = require("@angular/router");
var environment_1 = require("./../../environments/environment");
var message_model_1 = require("app/core/shared/_data/message.model");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var SecurityService = (function () {
    function SecurityService(bus, http, router) {
        this.bus = bus;
        this.http = http;
        this.router = router;
        this.userTokenKey = 'userToken';
        this.userKey = 'user';
        this.url = 'credentials';
        this.onSecurityErrNavigateToLogin();
        this.emitUserStatus();
    }
    SecurityService.prototype.logInUser = function (credentials) {
        var _this = this;
        this.http
            .post(this.url, credentials)
            .subscribe(function (r) {
            _this.saveUserToken(r);
            _this.getMe()
                .subscribe(_this.emitLogin.bind(_this));
        });
    };
    SecurityService.prototype.logOutUser = function () {
        localStorage.removeItem(this.userTokenKey);
        this.bus.emitUserToken(null);
        localStorage.removeItem(this.userKey);
        this.bus.emitUser(null);
        this.bus.emit({ level: message_model_1.Level.SUCCESS, text: 'logged out!!' });
        this.navigateTo(['/login']);
    };
    SecurityService.prototype.createBigbang = function (secret) {
        var _this = this;
        this.http
            .post(this.url + "/bigbang", secret)
            .subscribe(function (r) {
            _this.logInUser({ email: environment_1.environment.godEmail, password: environment_1.environment.secret });
            _this.bus.emit({ level: message_model_1.Level.SUCCESS, text: 'Big Bang!!' });
        });
    };
    SecurityService.prototype.getMe = function () {
        return this.http
            .get('users/me')
            .do(this.saveUser.bind(this));
    };
    SecurityService.prototype.onSecurityErrNavigateToLogin = function () {
        var _this = this;
        this.bus
            .getSecurityErr$()
            .subscribe(function (err) { return _this.navigateTo(['/login']); });
    };
    SecurityService.prototype.emitUserStatus = function () {
        var userToken = localStorage.getItem(this.userTokenKey);
        this.bus.emitUserToken(userToken);
        var user = this.getUserFromLocalStorage();
        this.bus.emitUser(user);
    };
    SecurityService.prototype.getUserFromLocalStorage = function () {
        var user = null;
        var userStorage = localStorage.getItem(this.userKey);
        if (userStorage) {
            user = JSON.parse(userStorage);
        }
        return user;
    };
    SecurityService.prototype.saveUserToken = function (response) {
        var userToken = response.access_token;
        localStorage.setItem(this.userTokenKey, userToken);
        this.bus.emitUserToken(userToken);
    };
    SecurityService.prototype.saveUser = function (user) {
        localStorage.setItem(this.userKey, JSON.stringify(user));
    };
    SecurityService.prototype.emitLogin = function (user) {
        this.bus.emitUser(user);
        this.bus.emit({ level: message_model_1.Level.SUCCESS, text: user.name + ' logged in!!' });
        this.navigateTo(['/me']);
    };
    SecurityService.prototype.navigateTo = function (target, args) {
        this.router.navigate(target);
    };
    SecurityService.prototype.acceptInvitation = function (credentials) {
        var _this = this;
        this.http.post(this.url + "/aceptInvitation", credentials).subscribe(function (d) {
            _this.saveUserToken(d);
            _this.getMe()
                .subscribe(_this.emitLogin.bind(_this));
        });
    };
    SecurityService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [bus_service_1.BusService, http_1.HttpClient, router_1.Router])
    ], SecurityService);
    return SecurityService;
}());
exports.SecurityService = SecurityService;
//# sourceMappingURL=security.service.js.map