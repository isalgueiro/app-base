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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var organization_service_1 = require("app/routes/organization/organization.service");
var common_1 = require("@angular/common");
var OrganizationHomeComponent = (function () {
    function OrganizationHomeComponent(http, route, organizationService, location) {
        this.http = http;
        this.route = route;
        this.organizationService = organizationService;
        this.location = location;
        this.organizationsUrl = 'organizations';
        this.showEdition = false;
        this.loadedMetadata = false;
        this.loadingPanelSchema = {
            loading: true,
            empty: false
        };
    }
    OrganizationHomeComponent.prototype.setSchemas = function () {
        var _this = this;
        this.organizationService.getViewSchema().subscribe(function (s) {
            _this.viewSchema = s;
            _this.viewSchema.header.title = _this.organization.name;
            _this.viewSchema.header.subtitle = _this.organization.description;
        });
        this.organizationService.getEditionSchema().subscribe(function (s) {
            _this.formSchema = s;
            _this.organizationService.getSchemaValues(_this.formSchema, _this.organization);
            _this.loadingPanelSchema.loading = false;
            _this.loadedMetadata = true;
        });
    };
    OrganizationHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TO DO:
        /*
        - get schemas from assets
         */
        this.route.params
            .subscribe(function (params) {
            var id = params['id'];
            _this.http
                .get(_this.organizationsUrl + "/" + id)
                .subscribe(function (d) {
                _this.organization = d.json();
                if (_this.organization) {
                    _this.setSchemas();
                }
                else {
                    _this.loadingPanelSchema.loading = false;
                    _this.loadedMetadata = true;
                    _this.loadingPanelSchema.empty = true;
                }
            });
        });
    };
    OrganizationHomeComponent.prototype.onSend = function (organization) {
        var _this = this;
        if (this.showEdition) {
            var aux = this.organization._id;
            var auxName_1 = this.organization.name;
            this.organization = Object.assign({}, organization);
            this.organization._id = aux;
            this.organizationService.updateOrganization(this.organization)
                .subscribe(function (org) {
                _this.organization = org;
                if (!(auxName_1 === _this.organization.name)) {
                    _this.location.go("/" + _this.organization.slug);
                }
                _this.setSchemas();
            });
        }
        this.showEdition = !this.showEdition;
    };
    OrganizationHomeComponent = __decorate([
        core_1.Component({
            selector: 'ab-organization-home',
            templateUrl: './organization-home.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute, organization_service_1.OrganizationService, common_1.Location])
    ], OrganizationHomeComponent);
    return OrganizationHomeComponent;
}());
exports.OrganizationHomeComponent = OrganizationHomeComponent;
//# sourceMappingURL=organization-home.component.js.map