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
var message_model_1 = require("app/core/shared/_data/message.model");
var ToastComponent = (function () {
    function ToastComponent() {
        this.close = new core_1.EventEmitter();
    }
    ToastComponent.prototype.ngOnInit = function () { };
    ToastComponent.prototype.ngOnChanges = function (change) {
        if (this.changedToShow(change)) {
            this.autoCloseIfNoButton();
        }
    };
    ToastComponent.prototype.changedToShow = function (change) {
        return change.show && change.show.currentValue === true;
    };
    ToastComponent.prototype.autoCloseIfNoButton = function () {
        var _this = this;
        if (!this.closeButton) {
            var timeout = this.level === message_model_1.Level.ERROR ? 5000 : 3000;
            setTimeout(function () {
                _this.show = false;
                _this.close.emit(false);
            }, timeout);
        }
    };
    ToastComponent.prototype.onCloseClick = function () {
        this.show = false;
        this.close.emit(false);
    };
    ToastComponent.prototype.getLevelClass = function () {
        var levelClass = 'toast-primary';
        switch (this.level) {
            case message_model_1.Level.PRIMARY:
                levelClass = 'toast-primary';
                break;
            case message_model_1.Level.SUCCESS:
                levelClass = 'toast-success';
                break;
            case message_model_1.Level.WARNING:
                levelClass = 'toast-warning';
                break;
            case message_model_1.Level.ERROR:
                levelClass = 'toast-error';
                break;
        }
        return levelClass;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ToastComponent.prototype, "show", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ToastComponent.prototype, "closeButton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ToastComponent.prototype, "level", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ToastComponent.prototype, "text", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ToastComponent.prototype, "close", void 0);
    ToastComponent = __decorate([
        core_1.Component({
            selector: 'ab-toast',
            templateUrl: './toast.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ToastComponent);
    return ToastComponent;
}());
exports.ToastComponent = ToastComponent;
//# sourceMappingURL=toast.component.js.map