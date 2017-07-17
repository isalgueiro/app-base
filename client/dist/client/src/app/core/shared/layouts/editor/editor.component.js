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
var EditorComponent = (function () {
    function EditorComponent() {
        this.create = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.rowAction = new core_1.EventEmitter();
        this.createModalActive = false;
        this.deleteModalActive = false;
    }
    EditorComponent.prototype.ngOnInit = function () {
    };
    EditorComponent.prototype.onAction = function (data) {
        console.log('onAction', data);
        if (data.key === 'create_new') {
            this.createModalActive = true;
        }
        else {
            this.rowAction.emit(data);
        }
    };
    EditorComponent.prototype.onRowAction = function (data) {
        console.log('onRowAction', data);
        if (data.key === 'delete') {
            this.deleteModalActive = true;
            this.selectedItem = data.value;
        }
        else {
            this.rowAction.emit(data);
        }
    };
    EditorComponent.prototype.onCreate = function (data) {
        this.createModalActive = false;
        this.create.emit(data);
    };
    EditorComponent.prototype.onDelete = function (data) {
        this.deleteModalActive = false;
        this.delete.emit(data);
    };
    EditorComponent.prototype.onCancelCreate = function () {
        this.createModalActive = false;
    };
    EditorComponent.prototype.onCancelDelete = function () {
        this.deleteModalActive = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "actionSchema", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "reportSchema", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "tableData", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "createFormSchema", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "create", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "delete", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "rowAction", void 0);
    EditorComponent = __decorate([
        core_1.Component({
            selector: 'ab-editor',
            templateUrl: './editor.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;
//# sourceMappingURL=editor.component.js.map