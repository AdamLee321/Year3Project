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
        this.EditAppointment = [];
        this.rows = [];
        this.Location = "Dublin";
        this.times = [
            new Date(2016, 11, 11, 8, 0, 0),
            new Date(2016, 11, 11, 8, 30, 0),
            new Date(2016, 11, 11, 9, 0, 0),
            new Date(2016, 11, 11, 9, 30, 0),
            new Date(2016, 11, 11, 10, 0, 0),
            new Date(2016, 11, 11, 10, 30, 0),
            new Date(2016, 11, 11, 11, 0, 0),
            new Date(2016, 11, 11, 11, 30, 0),
            new Date(2016, 11, 11, 12, 0, 0),
            new Date(2016, 11, 11, 12, 30, 0),
            new Date(2016, 11, 11, 13, 0, 0),
            new Date(2016, 11, 11, 13, 30, 0),
            new Date(2016, 11, 11, 14, 0, 0),
            new Date(2016, 11, 11, 14, 30, 0),
            new Date(2016, 11, 11, 15, 0, 0),
            new Date(2016, 11, 11, 15, 30, 0),
            new Date(2016, 11, 11, 16, 0, 0),
            new Date(2016, 11, 11, 16, 30, 0),
            new Date(2016, 11, 11, 17, 0, 0),
            new Date(2016, 11, 11, 17, 30, 0),
        ];
    }
    SecretaryDashComponent.prototype.updateTable = function (selDate) {
        var _this = this;
        this.rows.length = 0;
        console.log(selDate + "SecretaryDash.component.ts speaking");
        this.secretarydashservice.updateTable(selDate).subscribe(function (rows) {
            for (var i = 0; i < rows.length; i++) {
                _this.rows.push(rows[i]);
            }
            console.log(_this.rows);
            _this.GetPhysios();
        });
    };
    SecretaryDashComponent.prototype.OnInit = function () {
        this.GetPhysios();
    };
    SecretaryDashComponent.prototype.GetPhysios = function () {
        var _this = this;
        console.log(this.Location);
        this.secretarydashservice.GetPhysios(this.Location).subscribe(function (names) {
            _this.names = names;
            console.log(_this.names);
        });
    };
    SecretaryDashComponent.prototype.OpenModal = function (time, PhyFName, PhyLName) {
        console.log(this.rows[0]);
        for (var i = 0; i < this.rows.length; i++) {
            var appHours = this.rows[i].dateOfApp.getHours();
            var timeHours = time.getHours();
            if (appHours == timeHours) {
                if (this.rows[i].dateOfApp.getMinutes() == time.getMinutes()) {
                    if (this.rows[i].Phy_Fname == PhyFName) {
                        if (this.rows[i].Phy_Lname == PhyLName) {
                            this.EditAppointment.push(this.rows[i]);
                        }
                    }
                }
            }
        }
        this.teststring = time + PhyFName + PhyLName;
        if (!document.getElementById(this.teststring)) {
            this.AddApp.open();
            console.log("It does not exist!");
        }
        else {
            this.EditApp.open();
            console.log("So It does exist");
        }
    };
    __decorate([
        core_1.ViewChild('EditApp'), 
        __metadata('design:type', Object)
    ], SecretaryDashComponent.prototype, "EditApp", void 0);
    __decorate([
        core_1.ViewChild('AddApp'), 
        __metadata('design:type', Object)
    ], SecretaryDashComponent.prototype, "AddApp", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SecretaryDashComponent.prototype, "EditAppointment", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SecretaryDashComponent.prototype, "time", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SecretaryDashComponent.prototype, "PFName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SecretaryDashComponent.prototype, "PLName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SecretaryDashComponent.prototype, "PhyFName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SecretaryDashComponent.prototype, "PhyLName", void 0);
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