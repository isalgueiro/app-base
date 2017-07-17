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
var schema_service_1 = require("app/core/shared/_data/schema.service");
var MeService = (function () {
    function MeService(http, schemaService) {
        this.http = http;
        this.schemaService = schemaService;
        this.organizationsUrl = 'organizations';
        this.usersUrl = 'users';
        this.credentialsUrl = 'credentials';
    }
    MeService.prototype.getMeSchema = function () {
        return this.schemaService.getSchema('me');
    };
    MeService.prototype.getChangePasswordSchema = function () {
        return this.schemaService.getSchema('change_password');
    };
    MeService.prototype.getMeGodSchema = function () {
        return this.schemaService.getSchema('me_god');
    };
    MeService.prototype.getMeOrganizationsSchema = function () {
        return this.schemaService.getSchema('me_organizations');
    };
    MeService.prototype.getOrganizationsCount = function () {
        return this.http
            .get(this.organizationsUrl + "/count")
            .map(function (res) { return res.data; });
    };
    MeService.prototype.getUsersCount = function () {
        return this.http
            .get(this.usersUrl + "/count")
            .map(function (res) { return res.data; });
    };
    // TODO controlar si ninguna org
    MeService.prototype.getAdministratedOrganization = function (id) {
        return this.http
            .get(this.organizationsUrl + "/byId/" + id);
    };
    MeService.prototype.changePassword = function (password) {
        return this.http.patch(this.credentialsUrl + "/newPassword", password);
    };
    MeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, schema_service_1.SchemaService])
    ], MeService);
    return MeService;
}());
exports.MeService = MeService;
//# sourceMappingURL=me.service.js.map