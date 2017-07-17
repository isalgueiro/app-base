"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var interceptor_service_1 = require("./core/interceptor.service");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var layout_module_1 = require("app/core/layout/layout.module");
var shared_module_1 = require("app/core/shared/shared.module");
var bus_service_1 = require("app/core/bus.service");
var security_service_1 = require("app/core/security.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                layout_module_1.LayoutModule,
                shared_module_1.SharedModule
            ],
            providers: [
                bus_service_1.BusService,
                { provide: http_2.HTTP_INTERCEPTORS, useClass: interceptor_service_1.Interceptor, multi: true },
                { provide: http_2.HTTP_INTERCEPTORS, useClass: interceptor_service_1.JWTInterceptor, multi: true },
                { provide: http_2.HTTP_INTERCEPTORS, useClass: interceptor_service_1.ErrorInterceptor, multi: true },
                security_service_1.SecurityService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map