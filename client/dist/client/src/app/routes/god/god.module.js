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
var god_routing_1 = require("./god.routing");
var shared_module_1 = require("app/core/shared/shared.module");
var god_data_service_1 = require("app/routes/god/_data/god-data.service");
var bigbang_component_1 = require("app/routes/god/god-bigbang/bigbang.component");
var god_users_component_1 = require("./god-users/god-users.component");
var god_organizations_component_1 = require("app/routes/god/god-organizations/god-organizations.component");
var GodModule = (function () {
    function GodModule() {
    }
    GodModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                god_routing_1.GodRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                bigbang_component_1.GodBigbangComponent,
                god_organizations_component_1.GodOrganizationsComponent,
                god_users_component_1.GodUsersComponent
            ],
            providers: [god_data_service_1.GodDataService],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], GodModule);
    return GodModule;
}());
exports.GodModule = GodModule;
//# sourceMappingURL=god.module.js.map