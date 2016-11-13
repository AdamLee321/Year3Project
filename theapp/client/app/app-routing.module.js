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
var router_1 = require('@angular/router');
var login_component_1 = require('./Login/login.component');
var SecretaryDash_component_1 = require('./SecretaryDash/SecretaryDash.component');
var addPatient_component_1 = require('./AddPatient/addPatient.component');
var viewPatients_component_1 = require('./ViewPatients/viewPatients.component');
var AddAppointment_component_1 = require('./AddAppointment/AddAppointment.component');
var routes = [
    { path: '', redirectTo: 'secdash', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'secdash', component: SecretaryDash_component_1.SecretaryDashComponent },
    { path: 'addPatient', component: addPatient_component_1.AddPatientComponent },
    { path: 'viewPatients', component: viewPatients_component_1.ViewPatientsComponent },
    { path: 'addAppointment', component: AddAppointment_component_1.AddAppointmentComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map