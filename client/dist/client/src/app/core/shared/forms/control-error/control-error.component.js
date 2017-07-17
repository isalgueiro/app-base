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
var ControlErrorComponent = (function () {
    function ControlErrorComponent(formTools) {
        this.formTools = formTools;
    }
    ControlErrorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ControlErrorComponent.prototype, "control", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ControlErrorComponent.prototype, "form", void 0);
    ControlErrorComponent = __decorate([
        core_1.Component({
            selector: 'ab-control-error',
            template: "\n    <ng-container *ngIf=\"formTools.hasErrorsToShow(form.group,control.key)\">\n      <p class=\"form-input-hint hint-error\">{{ formTools.getErrors(form.group,control.key,form.schema) | json }}</p>\n    </ng-container>\n  ",
            styles: [" .hint-error { color: #e85600; } "]
        }),
        __metadata("design:paramtypes", [form_tools_service_1.FormToolsService])
    ], ControlErrorComponent);
    return ControlErrorComponent;
}());
exports.ControlErrorComponent = ControlErrorComponent;
//# sourceMappingURL=control-error.component.js.map