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
var organizations_service_1 = require("app/routes/home/_data/organizations.service");
var HomeComponent = (function () {
    function HomeComponent(organizationsService) {
        this.organizationsService = organizationsService;
        this.schemas = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.organizationsService
            .getAll()
            .subscribe(function (data) { return _this.schemas = _this.transformData(data); });
    };
    HomeComponent.prototype.transformData = function (organizations) {
        var panels = [];
        organizations.forEach(function (organization) {
            var organizationPanel = {
                header: {
                    title: organization.name,
                    subtitle: organization.address
                },
                actions: [
                    {
                        label: 'Ver centro',
                        icon: 'icon-search',
                        link: "/organization/" + organization.slug
                    }
                ]
            };
            panels.push(organizationPanel);
        });
        return panels;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'ab-home',
            templateUrl: './home.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [organizations_service_1.OrganizationsService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map