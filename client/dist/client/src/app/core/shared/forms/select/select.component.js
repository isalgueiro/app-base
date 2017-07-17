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
var form_tools_service_1 = require("app/core/shared/forms/form-tools.service");
var SelectComponent = (function () {
    function SelectComponent(formTools) {
        this.formTools = formTools;
    }
    SelectComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "control", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "form", void 0);
    SelectComponent = __decorate([
        core_1.Component({
            selector: 'ab-select',
            templateUrl: './select.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [form_tools_service_1.FormToolsService])
    ], SelectComponent);
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=select.component.js.map