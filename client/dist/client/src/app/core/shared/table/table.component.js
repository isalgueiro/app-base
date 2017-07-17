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
var TableComponent = (function () {
    function TableComponent(schemaService) {
        this.schemaService = schemaService;
        this.rowClick = new core_1.EventEmitter();
        this.rowAction = new core_1.EventEmitter();
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.onRowClick = function (row) {
        this.rowClick.emit(row);
    };
    TableComponent.prototype.onHeaderClick = function (field) {
        this.orderDataByKey(this.data, field.key);
    };
    TableComponent.prototype.orderDataByKey = function (values, orderKey) {
        return this.schemaService.orderDataByKey(values, orderKey);
    };
    // { key: action, value: row }
    TableComponent.prototype.onActionClick = function (event, row) {
        this.rowAction.emit({ key: event.key, value: row });
    };
    TableComponent.prototype.valueByPath = function (target, path) {
        return this.schemaService.valueByPath(target, path);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "schema", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TableComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "rowClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "rowAction", void 0);
    TableComponent = __decorate([
        core_1.Component({
            selector: 'ab-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css']
        }),
        __metadata("design:paramtypes", [schema_service_1.SchemaService])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map