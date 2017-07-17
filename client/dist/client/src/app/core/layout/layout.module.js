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
var layout_routing_1 = require("./layout.routing");
var shell_component_1 = require("./shell.component");
var top_bar_component_1 = require("./top-bar/top-bar.component");
var main_content_component_1 = require("./main-content/main-content.component");
var shared_module_1 = require("app/core/shared/shared.module");
var main_nav_component_1 = require("./main-nav/main-nav.component");
var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                layout_routing_1.LayoutRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [shell_component_1.ShellComponent, top_bar_component_1.TopBarComponent, main_content_component_1.MainContentComponent, main_nav_component_1.MainNavComponent],
            exports: [shell_component_1.ShellComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=layout.module.js.map