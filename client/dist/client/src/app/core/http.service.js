"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var bus_service_1 = require("./bus.service");
var environment_1 = require("./../../environments/environment");
var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions, bus) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.bus = bus;
        _this.apiUrl = environment_1.environment.apiUrl;
        _this.assetsUrl = environment_1.environment.assetsUrl;
        _this.authorization = '';
        _this.subscribeToTokenChanges();
        return _this;
    }
    HttpService.prototype.request = function (request, options) {
        this.configureRequest(request, options);
        return this.interceptResponse(request, options);
    };
    HttpService.prototype.configureRequest = function (request, options) {
        if (typeof request === 'string') {
            request = this.getApiUrl(request);
            this.setHeaders(options);
        }
        else {
            request['url'] = this.getApiUrl(request['url']);
            this.setHeaders(request);
        }
    };
    HttpService.prototype.interceptResponse = function (url, options) {
        var observableRequest = _super.prototype.request.call(this, url, options)
            .catch(this.onCatch.bind(this));
        return observableRequest;
    };
    HttpService.prototype.getApiUrl = function (currentUrl) {
        if (currentUrl.includes('assets/')) {
            return this.assetsUrl + currentUrl;
        }
        else {
            return this.apiUrl + currentUrl;
        }
    };
    HttpService.prototype.setHeaders = function (request) {
        var headers = request.headers;
        headers.set('Authorization', this.authorization);
    };
    HttpService.prototype.onCatch = function (res) {
        if (this.isSecurityError(res)) {
            this.bus.emitSecurityError(res);
        }
        else {
            this.bus.emitHttpError(res);
        }
        return Observable_1.Observable.throw(res);
    };
    HttpService.prototype.isSecurityError = function (res) {
        return (res.status === 401 /* UNAUTHORIZED */ ||
            res.status === 419 /* AUTHENTICATION_TIMEOUT */);
    };
    HttpService.prototype.isNotAllowed = function (res) {
        return res.status === 403 /* FORBIDDEN */;
    };
    HttpService.prototype.subscribeToTokenChanges = function () {
        var _this = this;
        this.bus
            .getUserToken$()
            .subscribe(function (token) { return _this.authorization = 'Bearer ' + token; });
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.ConnectionBackend,
            http_1.RequestOptions,
            bus_service_1.BusService])
    ], HttpService);
    return HttpService;
}(http_1.Http));
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map