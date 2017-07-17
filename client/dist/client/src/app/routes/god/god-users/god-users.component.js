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
var GodUsersComponent = (function () {
    function GodUsersComponent() {
    }
    GodUsersComponent.prototype.ngOnInit = function () {
        this.actionSchema = {
            header: {
                title: 'Users',
                subtitle: 'Users, statuses and roles',
                icon: 'icon-people'
            },
            actions: [
                {
                    label: 'Create New',
                    key: 'create_new'
                }
            ]
        };
        this.reportSchema = {
            header: {
                title: 'List of Users'
            },
            emptyMessage: 'There aren\'t any users to display :(',
            fields: [
                {
                    label: 'User',
                    key: 'name',
                    type: 'string'
                },
                {
                    label: 'Email',
                    key: 'email',
                    type: 'string'
                },
                ,
                {
                    label: 'Status',
                    key: 'status',
                    type: 'string'
                },
                ,
                {
                    label: 'Roles',
                    key: 'roles',
                    type: 'string'
                }
            ], actions: [
                {
                    label: 'In',
                    key: 'aprobe',
                    icon: 'icon-check'
                },
                {
                    label: 'Out',
                    key: 'reject',
                    icon: 'icon-cross'
                },
                {
                    label: 'Del',
                    key: 'delete',
                    icon: 'icon-delete'
                },
            ]
        };
        this.createFormSchema = {
            title: 'New User',
            submitLabel: 'Save User',
            controls: [
                {
                    key: 'name',
                    type: 'text',
                    label: 'Name',
                    validators: [{ key: 'required', errorMessage: 'Name is required' }]
                },
                {
                    key: 'phone',
                    type: 'text',
                    label: 'Phone',
                    validators: []
                },
                {
                    key: 'email',
                    type: 'email',
                    label: 'Email',
                    validators: [{ key: 'required', errorMessage: 'Email is required' }]
                },
            ]
        };
        this.users = [];
    };
    GodUsersComponent.prototype.onCreate = function (data) {
        console.log('creating user: ', data);
    };
    GodUsersComponent.prototype.onDelete = function (data) {
        console.log('deleting user: ', data);
    };
    GodUsersComponent.prototype.onRowAction = function (data) {
        console.log('action over user: ', data);
    };
    GodUsersComponent = __decorate([
        core_1.Component({
            selector: 'ab-god-users',
            templateUrl: './god-users.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], GodUsersComponent);
    return GodUsersComponent;
}());
exports.GodUsersComponent = GodUsersComponent;
//# sourceMappingURL=god-users.component.js.map