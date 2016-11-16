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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var SecretaryDash_component_1 = require('./SecretaryDash.component');
var secretary_header_module_1 = require('../SecretaryHeader/secretary-header.module');
var SideBar_module_1 = require('../SideBar/SideBar.module');
var ng2_pagination_1 = require('ng2-pagination');
var primeng_1 = require('primeng/primeng');
var filterappointment_pipe_1 = require('../filterappointment.pipe');
var SecretaryDashModule = (function () {
    function SecretaryDashModule() {
    }
    SecretaryDashModule = __decorate([
        core_1.NgModule({
            imports: [http_1.HttpModule, platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule, secretary_header_module_1.SecretaryHeaderModule, SideBar_module_1.SideBarModule, primeng_1.CalendarModule, ng2_pagination_1.Ng2PaginationModule],
            declarations: [SecretaryDash_component_1.SecretaryDashComponent, filterappointment_pipe_1.FilterAppointmentPipe],
            exports: [SecretaryDash_component_1.SecretaryDashComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SecretaryDashModule);
    return SecretaryDashModule;
}());
exports.SecretaryDashModule = SecretaryDashModule;
//# sourceMappingURL=SecretaryDash.module.js.map