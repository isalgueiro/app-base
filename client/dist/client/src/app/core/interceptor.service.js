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
var bus_service_1 = require("./bus.service");
var environment_1 = require("./../../environments/environment");
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var Interceptor = (function () {
    function Interceptor() {
    }
    Interceptor.prototype.intercept = function (req, next) {
        req = req.clone({
            url: "" + environment_1.environment.apiUrl + req.url
        });
        return next.handle(req);
    };
    Interceptor = __decorate([
        core_1.Injectable()
    ], Interceptor);
    return Interceptor;
}());
exports.Interceptor = Interceptor;
var JWTInterceptor = (function () {
    function JWTInterceptor(bus) {
        this.bus = bus;
        this.subscribeToTokenChanges();
    }
    JWTInterceptor.prototype.intercept = function (req, next) {
        req = req.clone({
            setHeaders: {
                Authorization: this.authorization
            }
        });
        return next.handle(req);
    };
    JWTInterceptor.prototype.subscribeToTokenChanges = function () {
        var _this = this;
        this.bus
            .getUserToken$()
            .subscribe(function (token) { return _this.authorization = 'Bearer ' + token; });
    };
    JWTInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [bus_service_1.BusService])
    ], JWTInterceptor);
    return JWTInterceptor;
}());
exports.JWTInterceptor = JWTInterceptor;
var ErrorInterceptor = (function () {
    function ErrorInterceptor(bus) {
        this.bus = bus;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req)
            .catch(this.onCatch.bind(this));
    };
    ErrorInterceptor.prototype.onCatch = function (res) {
        if (this.isSecurityError(res)) {
            this.bus.emitSecurityError(res);
        }
        else {
            this.bus.emitHttpError(res);
        }
        return Observable_1.Observable.throw(res);
    };
    ErrorInterceptor.prototype.isSecurityError = function (res) {
        return (res.status === 401 /* UNAUTHORIZED */ ||
            res.status === 419 /* AUTHENTICATION_TIMEOUT */);
    };
    ErrorInterceptor.prototype.isNotAllowed = function (res) {
        return res.status === 403 /* FORBIDDEN */;
    };
    ErrorInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [bus_service_1.BusService])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());
exports.ErrorInterceptor = ErrorInterceptor;
//# sourceMappingURL=interceptor.service.js.map