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
var user_model_1 = require("app/core/shared/_data/user.model");
var security_service_1 = require("app/core/security.service");
var me_service_1 = require("app/routes/me/me.service");
var bus_service_1 = require("app/core/bus.service");
var MeComponent = (function () {
    function MeComponent(security, me, bus) {
        this.security = security;
        this.me = me;
        this.bus = bus;
        this.loadedMetadata = false;
        this.user = null;
        this.schemas = [];
        this.organization = null;
    }
    MeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMe();
        this.bus
            .getPageSchema$()
            .subscribe(function (s) { return _this.schemas = s; });
    };
    MeComponent.prototype.getMe = function () {
        var _this = this;
        this.security
            .getMe()
            .subscribe(function (user) {
            _this.user = user;
            if (_this.user) {
                _this.configureDashBoard(_this.user.roles[0].toString());
                _this.me.getChangePasswordSchema()
                    .subscribe(function (s) { return _this.changePassSchema = s; });
            }
        });
    };
    MeComponent.prototype.configureDashBoard = function (role) {
        this.schemas[0].header.title = this.user.name;
        this.schemas[0].header.subtitle = this.user.email;
        if (role === user_model_1.ROLE.GOD.toString()) {
            this.configureDashBoardForGod();
        }
        else if (role === user_model_1.ROLE.ADMIN.toString()) {
            this.configureDashBoardForAdmin();
        }
    };
    MeComponent.prototype.configureDashBoardForGod = function () {
        var _this = this;
        this.me
            .getMeGodSchema()
            .subscribe(function (s) {
            _this.schemas = _this.schemas.concat(s);
            _this.loadedMetadata = true;
            _this.me.getOrganizationsCount()
                .subscribe(function (count) { return _this.schemas[1].header.title = count + ' ' + _this.schemas[1].header.title; });
            _this.me.getUsersCount()
                .subscribe(function (count) { return _this.schemas[2].header.title = count + ' ' + _this.schemas[2].header.title; });
        });
    };
    MeComponent.prototype.configureDashBoardForAdmin = function () {
        var _this = this;
        this.me.getAdministratedOrganization(this.user.organizationId).subscribe(function (organization) {
            _this.organization = organization;
            if (_this.organization) {
                _this.me
                    .getMeOrganizationsSchema()
                    .subscribe(function (s) {
                    _this.schemas = _this.schemas.concat(s);
                    // TODO factorize this
                    _this.schemas[1].header.title = _this.organization.name;
                    _this.schemas[1].header.subtitle = _this.organization.description;
                    _this.schemas[1].actions[0].label = "Manage " + _this.organization.name;
                    _this.schemas[1].actions[0].link = "/organization/" + _this.organization.slug;
                    _this.loadedMetadata = true;
                });
            }
        });
    };
    MeComponent.prototype.onSend = function (event) {
        console.log('onSend', event);
        if (event.key === 'logout') {
            this.logOutActive = true;
        }
        else if (event.key === 'change_password') {
            this.changePasswordActive = true;
        }
    };
    MeComponent.prototype.onLogOutClick = function () {
        this.logOutActive = false;
        this.security.logOutUser();
    };
    MeComponent.prototype.onChangePasswordClick = function (newPassword) {
        this.me.changePassword(newPassword).subscribe();
        this.changePasswordActive = false;
    };
    MeComponent = __decorate([
        core_1.Component({
            selector: 'ab-me',
            templateUrl: './me.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [security_service_1.SecurityService,
            me_service_1.MeService,
            bus_service_1.BusService])
    ], MeComponent);
    return MeComponent;
}());
exports.MeComponent = MeComponent;
//# sourceMappingURL=me.component.js.map