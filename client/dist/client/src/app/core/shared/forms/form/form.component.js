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
var form_tools_service_1 = require("app/core/shared/forms/form-tools.service");
var FormComponent = (function () {
    function FormComponent(formBuilder, formTools) {
        this.formBuilder = formBuilder;
        this.formTools = formTools;
        this.send = new core_1.EventEmitter();
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.formSchema) {
            var formSchema = changes.formSchema.currentValue;
            if (!formSchema || !formSchema.controls) {
                return;
            }
            var controlsGroup_1 = {};
            formSchema.controls.forEach(function (c) {
                controlsGroup_1[c.key] = [
                    c.defaultValue,
                    c.validators.map(_this.formTools.getValidator)
                ];
            });
            var formGroup = this.formBuilder.group(controlsGroup_1);
            this.form = {
                schema: formSchema,
                group: formGroup
            };
            this.formSchema = formSchema;
        }
    };
    FormComponent.prototype.onClick = function () {
        this.send.emit(this.form.group.value);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "formSchema", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FormComponent.prototype, "send", void 0);
    FormComponent = __decorate([
        core_1.Component({
            selector: 'ab-form',
            templateUrl: './form.component.html',
            styleUrls: ['./form.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, form_tools_service_1.FormToolsService])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map