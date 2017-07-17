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
var LoadEmptyStateComponent = (function () {
    function LoadEmptyStateComponent() {
        this.action = new core_1.EventEmitter();
    }
    LoadEmptyStateComponent.prototype.ngOnInit = function () {
    };
    LoadEmptyStateComponent.prototype.onClick = function () {
        this.action.emit(this.schema.action.value);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LoadEmptyStateComponent.prototype, "schema", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], LoadEmptyStateComponent.prototype, "action", void 0);
    LoadEmptyStateComponent = __decorate([
        core_1.Component({
            selector: 'ab-load-empty-state',
            templateUrl: './load-empty-state.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], LoadEmptyStateComponent);
    return LoadEmptyStateComponent;
}());
exports.LoadEmptyStateComponent = LoadEmptyStateComponent;
//# sourceMappingURL=load-empty-state.component.js.map