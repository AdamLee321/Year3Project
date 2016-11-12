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
var SecretaryDash_service_1 = require('./SecretaryDash.service');
var SecretaryDashComponent = (function () {
    function SecretaryDashComponent(secretarydashservice) {
        this.secretarydashservice = secretarydashservice;
    }
    SecretaryDashComponent.prototype.updateTable = function (selDate) {
        var _this = this;
        console.log(selDate + "SecretaryDash.component.ts speaking");
        this.secretarydashservice.updateTable(selDate).subscribe(function (rows) {
            _this.rows = rows;
            console.log(rows);
        });
    };
    SecretaryDashComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'SecDash',
            templateUrl: 'SecretaryDash.component.html',
            providers: [SecretaryDash_service_1.SecretaryDashService]
        }), 
        __metadata('design:paramtypes', [SecretaryDash_service_1.SecretaryDashService])
    ], SecretaryDashComponent);
    return SecretaryDashComponent;
}());
exports.SecretaryDashComponent = SecretaryDashComponent;
//# sourceMappingURL=SecretaryDash.component.js.map