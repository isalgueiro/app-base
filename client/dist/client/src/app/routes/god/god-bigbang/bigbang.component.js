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
var god_data_service_1 = require("app/routes/god/_data/god-data.service");
var environment_1 = require("./../../../../environments/environment");
var GodBigbangComponent = (function () {
    function GodBigbangComponent(godData) {
        this.godData = godData;
        this.formSchema = {
            title: 'God creation',
            submitLabel: 'Big Bang!!!',
            controls: [
                {
                    key: 'secret',
                    type: 'password',
                    label: 'Secret',
                    defaultValue: environment_1.environment.secret,
                    validators: [{ key: 'required', errorMessage: 'Secret is required' }]
                }
            ]
        };
    }
    GodBigbangComponent.prototype.ngOnInit = function () { };
    GodBigbangComponent.prototype.onSend = function (secret) {
        this.godData
            .createBigbang(secret);
    };
    GodBigbangComponent = __decorate([
        core_1.Component({
            selector: 'ab-god-bigbang',
            template: "\n    <header>{{formSchema.title}}</header>\n    <ab-form [formSchema]=\"formSchema\"\n             (send)=\"onSend($event)\">\n    </ab-form>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [god_data_service_1.GodDataService])
    ], GodBigbangComponent);
    return GodBigbangComponent;
}());
exports.GodBigbangComponent = GodBigbangComponent;
//# sourceMappingURL=bigbang.component.js.map