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
var ActionComponent = (function () {
    function ActionComponent() {
        this.btnClass = 'btn-primary';
        this.action = new core_1.EventEmitter();
    }
    ActionComponent.prototype.ngOnInit = function () {
    };
    ActionComponent.prototype.onClick = function () {
        console.log('onClick', this.schema);
        this.action.emit({ key: this.schema.key, value: this.schema.value });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ActionComponent.prototype, "schema", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ActionComponent.prototype, "btnClass", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ActionComponent.prototype, "action", void 0);
    ActionComponent = __decorate([
        core_1.Component({
            selector: 'ab-action',
            templateUrl: './action.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ActionComponent);
    return ActionComponent;
}());
exports.ActionComponent = ActionComponent;
//# sourceMappingURL=action.component.js.map