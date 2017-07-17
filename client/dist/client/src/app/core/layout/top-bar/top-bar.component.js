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
var environment_1 = require("environments/environment");
var TopBarComponent = (function () {
    function TopBarComponent() {
        this.user = null;
        this.userInitials = '?';
        this.title = environment_1.environment.appTitle;
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TopBarComponent.prototype, "user", void 0);
    TopBarComponent = __decorate([
        core_1.Component({
            selector: 'ab-top-bar',
            templateUrl: './top-bar.component.html',
            styleUrls: ['./top-bar.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], TopBarComponent);
    return TopBarComponent;
}());
exports.TopBarComponent = TopBarComponent;
//# sourceMappingURL=top-bar.component.js.map