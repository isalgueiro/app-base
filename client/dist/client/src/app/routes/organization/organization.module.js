"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var organization_routing_1 = require("./organization.routing");
var organization_home_component_1 = require("./organization-home/organization-home.component");
var shared_module_1 = require("app/core/shared/shared.module");
var organization_service_1 = require("app/routes/organization/organization.service");
var OrganizationModule = (function () {
    function OrganizationModule() {
    }
    OrganizationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                organization_routing_1.OrganizationRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [organization_home_component_1.OrganizationHomeComponent],
            providers: [organization_service_1.OrganizationService]
        })
    ], OrganizationModule);
    return OrganizationModule;
}());
exports.OrganizationModule = OrganizationModule;
//# sourceMappingURL=organization.module.js.map