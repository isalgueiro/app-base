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
var bus_service_1 = require("app/core/bus.service");
var ShellComponent = (function () {
    function ShellComponent(bus) {
        this.bus = bus;
        this.user = null;
        this.text = '';
    }
    ShellComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuLinks = [
            {
                icon: 'icon-apps',
                label: 'Home',
                link: ''
            }
        ];
        this.bus
            .getMessage$()
            .subscribe(function (message) {
            console.log(JSON.stringify(message));
            _this.text = message.text;
            _this.level = message.level;
            _this.show = true;
        });
        this.bus
            .getUser$()
            .subscribe(function (user) {
            _this.user = user;
            // To Do: Menú links by Role
        });
    };
    ShellComponent = __decorate([
        core_1.Component({
            selector: 'ab-shell',
            templateUrl: './shell.component.html',
            styleUrls: ['./shell.component.css']
        }),
        __metadata("design:paramtypes", [bus_service_1.BusService])
    ], ShellComponent);
    return ShellComponent;
}());
exports.ShellComponent = ShellComponent;
//# sourceMappingURL=shell.component.js.map