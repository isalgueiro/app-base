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
var schema_service_1 = require("app/core/shared/_data/schema.service");
var bus_service_1 = require("app/core/bus.service");
var PageComponent = (function () {
    function PageComponent(schemaService, bus) {
        this.schemaService = schemaService;
        this.bus = bus;
    }
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schemaService
            .getSchema(this.name)
            .subscribe(function (schemas) {
            _this.bus.emitPageSchema(schemas);
            _this.loadedMetadata = true;
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PageComponent.prototype, "name", void 0);
    PageComponent = __decorate([
        core_1.Component({
            selector: 'ab-page',
            templateUrl: './page.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [schema_service_1.SchemaService, bus_service_1.BusService])
    ], PageComponent);
    return PageComponent;
}());
exports.PageComponent = PageComponent;
//# sourceMappingURL=page.component.js.map