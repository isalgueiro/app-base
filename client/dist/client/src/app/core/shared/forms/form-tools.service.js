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
var forms_1 = require("@angular/forms");
var FormToolsService = (function () {
    function FormToolsService() {
    }
    FormToolsService.prototype.hasErrorsToShow = function (form, field) {
        var control = this.getControl(form, field);
        return control && control.invalid && this.shouldBeValid(control);
    };
    FormToolsService.prototype.getErrors = function (form, field, schema) {
        var control = this.getControl(form, field);
        if (control && control.errors) {
            return this.getMessage(control.errors, field, schema);
        }
        else {
            return '';
        }
    };
    FormToolsService.prototype.getMessage = function (errors, field, schema) {
        // To Do: Repeat for every key
        var errorKey = Object.keys(errors)[0];
        var control = schema.controls.find(function (c) { return c.key === field; });
        if (control) {
            var validator = control.validators.find(function (v) { return v.key === errorKey; });
            if (validator) {
                return validator.errorMessage;
            }
        }
        else {
            return errorKey;
        }
    };
    FormToolsService.prototype.getControl = function (form, field) {
        return form && form.get(field);
    };
    FormToolsService.prototype.shouldBeValid = function (control) {
        return (control.touched || control.dirty);
    };
    FormToolsService.prototype.getValidator = function (validation) {
        switch (validation.key) {
            case 'required':
                return forms_1.Validators.required;
            default:
                break;
        }
    };
    FormToolsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FormToolsService);
    return FormToolsService;
}());
exports.FormToolsService = FormToolsService;
//# sourceMappingURL=form-tools.service.js.map