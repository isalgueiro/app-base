"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var form_component_1 = require("./forms/form/form.component");
var table_component_1 = require("./table/table.component");
var input_component_1 = require("./forms/input/input.component");
var control_error_component_1 = require("./forms/control-error/control-error.component");
var form_tools_service_1 = require("app/core/shared/forms/form-tools.service");
var counter_component_1 = require("./widgets/counter/counter.component");
var router_1 = require("@angular/router");
var tile_component_1 = require("./widgets/tile/tile.component");
var modal_component_1 = require("./layouts/modal/modal.component");
var toast_component_1 = require("./widgets/toast/toast.component");
var panel_component_1 = require("./widgets/panel/panel.component");
var dashboard_component_1 = require("./layouts/dashboard/dashboard.component");
var select_component_1 = require("./forms/select/select.component");
var radio_component_1 = require("./forms/radio/radio.component");
var switch_component_1 = require("./forms/switch/switch.component");
var textarea_component_1 = require("./forms/textarea/textarea.component");
var load_empty_state_component_1 = require("./layouts/load-empty-state/load-empty-state.component");
var editor_component_1 = require("./layouts/editor/editor.component");
var action_component_1 = require("./layouts/action/action.component");
var schema_service_1 = require("app/core/shared/_data/schema.service");
var page_component_1 = require("./layouts/page/page.component");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
            ],
            declarations: [
                control_error_component_1.ControlErrorComponent, form_component_1.FormComponent, input_component_1.InputComponent, table_component_1.TableComponent,
                counter_component_1.CounterComponent, tile_component_1.TileComponent, modal_component_1.ModalComponent, toast_component_1.ToastComponent, panel_component_1.PanelComponent,
                dashboard_component_1.DashboardComponent, select_component_1.SelectComponent, radio_component_1.RadioComponent, switch_component_1.SwitchComponent,
                textarea_component_1.TextareaComponent, load_empty_state_component_1.LoadEmptyStateComponent, editor_component_1.EditorComponent, action_component_1.ActionComponent, page_component_1.PageComponent
            ],
            exports: [
                action_component_1.ActionComponent,
                control_error_component_1.ControlErrorComponent,
                counter_component_1.CounterComponent,
                dashboard_component_1.DashboardComponent,
                editor_component_1.EditorComponent,
                form_component_1.FormComponent,
                input_component_1.InputComponent,
                load_empty_state_component_1.LoadEmptyStateComponent,
                modal_component_1.ModalComponent,
                page_component_1.PageComponent,
                panel_component_1.PanelComponent,
                forms_1.ReactiveFormsModule,
                table_component_1.TableComponent,
                toast_component_1.ToastComponent,
                tile_component_1.TileComponent
            ],
            providers: [form_tools_service_1.FormToolsService, schema_service_1.SchemaService],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map