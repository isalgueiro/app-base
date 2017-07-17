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
var http_1 = require("@angular/http");
var SchemaService = (function () {
    function SchemaService(http) {
        this.http = http;
    }
    SchemaService.prototype.getSchema = function (schemaName) {
        return this.http
            .get("assets/schemas/" + schemaName + ".json")
            .map(function (res) { return res.json(); });
    };
    SchemaService.prototype.valueByPath = function (target, path) {
        if (!path) {
            return '';
        }
        path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        path = path.replace(/^\./, ''); // strip a leading dot
        var chunks = path.split('.');
        for (var index = 0, n = chunks.length; index < n; ++index) {
            var chunk = chunks[index];
            if (target) {
                if (chunk in target) {
                    target = target[chunk];
                }
                else {
                    return;
                }
            }
            else {
                return;
            }
        }
        return target;
    };
    SchemaService.prototype.orderDataByKey = function (values, orderKey) {
        var _this = this;
        return values.sort(function (a, b) {
            var valA = _this.valueByPath(a, orderKey);
            var valB = _this.valueByPath(b, orderKey);
            if (valA < valB) {
                return -1;
            }
            if (valA > valB) {
                return 1;
            }
            return 0;
        });
    };
    SchemaService.prototype.populateDefaultValues = function (form, target) {
        var _this = this;
        form.controls.forEach(function (c) { return c.defaultValue = _this.valueByPath(target, c.key); });
    };
    SchemaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SchemaService);
    return SchemaService;
}());
exports.SchemaService = SchemaService;
//# sourceMappingURL=schema.service.js.map