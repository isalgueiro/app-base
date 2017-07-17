"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var god_organizations_component_1 = require("app/routes/god/god-organizations/god-organizations.component");
var bigbang_component_1 = require("app/routes/god/god-bigbang/bigbang.component");
var god_users_component_1 = require("./god-users/god-users.component");
var routes = [
    {
        path: '',
        redirectTo: 'organizations',
        pathMatch: 'full'
    },
    {
        path: 'bigbang',
        component: bigbang_component_1.GodBigbangComponent
    },
    {
        path: 'organizations',
        component: god_organizations_component_1.GodOrganizationsComponent
    },
    {
        path: 'users',
        component: god_users_component_1.GodUsersComponent
    }
];
var GodRoutingModule = (function () {
    function GodRoutingModule() {
    }
    GodRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], GodRoutingModule);
    return GodRoutingModule;
}());
exports.GodRoutingModule = GodRoutingModule;
//# sourceMappingURL=god.routing.js.map