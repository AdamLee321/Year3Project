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
var editPatient_component_1 = require('./editPatient.component');
var secretary_header_module_1 = require('../SecretaryHeader/secretary-header.module');
var SideBar_module_1 = require('../SideBar/SideBar.module');
var EditPatientModule = (function () {
    function EditPatientModule() {
    }
    EditPatientModule = __decorate([
        core_1.NgModule({
            imports: [http_1.HttpModule, platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule, secretary_header_module_1.SecretaryHeaderModule, SideBar_module_1.SideBarModule],
            declarations: [editPatient_component_1.EditPatientComponent],
            exports: [editPatient_component_1.EditPatientComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], EditPatientModule);
    return EditPatientModule;
}());
exports.EditPatientModule = EditPatientModule;
/* This module is not connected to the main app.module.ts file */ 
//# sourceMappingURL=editPatient.module.js.map