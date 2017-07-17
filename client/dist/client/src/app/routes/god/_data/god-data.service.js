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
var http_2 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/do");
var bus_service_1 = require("app/core/bus.service");
var security_service_1 = require("app/core/security.service");
var user_model_1 = require("app/core/shared/_data/user.model");
var GodDataService = (function () {
    function GodDataService(http, bus, security) {
        this.http = http;
        this.bus = bus;
        this.security = security;
        this.organizationsUrl = 'organizations';
        this.credentialsUrl = 'credentials';
    }
    GodDataService.prototype.getOrganizationsCount = function () {
        return this.http
            .get(this.organizationsUrl + "/count")
            .map(function (res) { return res.data; });
    };
    /* getOrganizationsFull(): Observable<any[]> {
      return this.http
        .get<any[]>(this.organizationsUrl)
        .map(data => data.map(d => {
          const org = { _id: d._id, name: d.name, admin: { name: '', email: '', userId: '' } };
          return org;
        }))
        .switchMap(orgs => {
          const observables = orgs.map(org => {
            return this
              .getOrganizationAdmin(org.id)
              .map(users => { org.admin = users && users[0]; return org; })
          });
          return Observable.forkJoin(observables);
        })
    } */
    GodDataService.prototype.getOrganizations = function () {
        return this.http
            .get(this.organizationsUrl)
            .map(function (data) { return data.map(function (d) {
            var org = { _id: d._id, name: d.name, admin: { name: '', email: '', userId: '' } };
            return org;
        }); });
    };
    GodDataService.prototype.getOrganizationAdmin = function (organizationId) {
        var search = new http_2.URLSearchParams();
        search.set('role', user_model_1.ROLE.ADMIN.toString());
        return this.http
            .get(this.organizationsUrl + "/" + organizationId + "/users?" + search.toString());
    };
    GodDataService.prototype.setOrganizationAdmin = function (newAdmin) {
        newAdmin.role = user_model_1.ROLE.ADMIN;
        return this.http
            .post(this.credentialsUrl + "/invitation", newAdmin);
    };
    GodDataService.prototype.postOrganization = function (newOrganization) {
        return this.http
            .post(this.organizationsUrl, newOrganization);
    };
    GodDataService.prototype.deleteOrganization = function (oldOrganization) {
        return this.http
            .delete(this.organizationsUrl + "/" + oldOrganization._id);
    };
    GodDataService.prototype.createBigbang = function (secret) {
        this.security.createBigbang(secret);
    };
    GodDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, bus_service_1.BusService, security_service_1.SecurityService])
    ], GodDataService);
    return GodDataService;
}());
exports.GodDataService = GodDataService;
//# sourceMappingURL=god-data.service.js.map