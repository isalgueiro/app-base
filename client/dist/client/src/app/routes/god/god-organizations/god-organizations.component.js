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
var god_data_service_1 = require("app/routes/god/_data/god-data.service");
require("rxjs/add/operator/do");
var bus_service_1 = require("app/core/bus.service");
var message_model_1 = require("app/core/shared/_data/message.model");
var http_1 = require("@angular/http");
var schema_service_1 = require("app/core/shared/_data/schema.service");
var GodOrganizationsComponent = (function () {
    function GodOrganizationsComponent(godData, bus, http, schemaService) {
        this.godData = godData;
        this.bus = bus;
        this.http = http;
        this.schemaService = schemaService;
        this.activeSetAdminModal = false;
        this.activeCreateOrganizationModal = false;
        this.activeDeleteOrganizationModal = false;
        this.loadedMetadata = false;
        this.loadingPanelSchema = {
            loading: true,
            empty: false
        };
        this.name = 'organizations';
    }
    GodOrganizationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schemaService
            .getSchema('god_organizations')
            .subscribe(function (schemas) {
            _this.actionSchema = schemas.actions;
            _this.createFormSchema = schemas.create;
            _this.reportSchema = schemas.report;
            _this.setAdminFormSchema = schemas.setAdmin;
            _this.loadedMetadata = true;
        });
        this.getOrganizations();
    };
    GodOrganizationsComponent.prototype.getOrganizations = function () {
        var _this = this;
        this.godData
            .getOrganizations()
            .do(function (data) { return _this.organizations = data; })
            .subscribe(this.getOrganizationsAdmins.bind(this));
    };
    GodOrganizationsComponent.prototype.getOrganizationsAdmins = function () {
        this.organizations.forEach(this.getOrganizationAdmin.bind(this));
    };
    GodOrganizationsComponent.prototype.getOrganizationAdmin = function (organization) {
        this.godData
            .getOrganizationAdmin(organization._id)
            .subscribe(function (user) { return organization.admin = user[0]; });
    };
    GodOrganizationsComponent.prototype.onSetAdmin = function (organization) {
        this.activeOrganization = organization;
        this.activeSetAdminModal = true;
    };
    GodOrganizationsComponent.prototype.onCloseSetAdminModal = function (newAdmin) {
        if (newAdmin) {
            this.setOrganizationAdmin(newAdmin);
        }
        this.activeOrganization = null;
        this.activeSetAdminModal = false;
    };
    GodOrganizationsComponent.prototype.onRowAction = function (data) {
        console.log('onRowAction Receibed', data);
        if (data.key === 'setAdmin') {
            this.onSetAdmin(data.value);
        }
    };
    GodOrganizationsComponent.prototype.setOrganizationAdmin = function (newAdmin) {
        var _this = this;
        newAdmin.organizationId = this.activeOrganization._id;
        this.godData
            .setOrganizationAdmin(newAdmin)
            .subscribe(function (res) {
            _this.bus.emit({ level: message_model_1.Level.SUCCESS, text: newAdmin.name + ' asiggned!!' });
            _this.getOrganizations();
        });
    };
    GodOrganizationsComponent.prototype.onCreate = function (newOrganization) {
        var _this = this;
        console.log('onCreate', newOrganization);
        this.activeCreateOrganizationModal = false;
        if (newOrganization) {
            this.godData
                .postOrganization(newOrganization)
                .subscribe(function (res) {
                _this.bus.emit({ level: message_model_1.Level.SUCCESS, text: newOrganization.name + ' created!!' });
                _this.getOrganizations();
            });
        }
    };
    GodOrganizationsComponent.prototype.onDelete = function (oldOrganization) {
        var _this = this;
        console.log('onDelete', oldOrganization);
        this.activeDeleteOrganizationModal = false;
        this.godData
            .deleteOrganization(oldOrganization)
            .subscribe(function (res) {
            _this.bus.emit({ level: message_model_1.Level.SUCCESS, text: oldOrganization.name + ' deleted!!' });
            _this.getOrganizations();
        });
    };
    GodOrganizationsComponent = __decorate([
        core_1.Component({
            selector: 'ab-god-organizations',
            templateUrl: './god-organizations.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [god_data_service_1.GodDataService, bus_service_1.BusService, http_1.Http, schema_service_1.SchemaService])
    ], GodOrganizationsComponent);
    return GodOrganizationsComponent;
}());
exports.GodOrganizationsComponent = GodOrganizationsComponent;
//# sourceMappingURL=god-organizations.component.js.map