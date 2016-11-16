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
var AddAppointment_service_1 = require('./AddAppointment.service');
var AddAppointmentComponent = (function () {
    function AddAppointmentComponent(addappointmentservice) {
        this.addappointmentservice = addappointmentservice;
        this.alerts = [];
    }
    AddAppointmentComponent.prototype.ngOnInit = function () {
        var thevalue = new Date(Date.now());
        this.UpdateDate(thevalue);
    };
    AddAppointmentComponent.prototype.UpdateDate = function (value) {
        var thevalue = new Date(value);
        if (thevalue.getMinutes() > 0 && thevalue.getMinutes() < 15) {
            thevalue.setMinutes(thevalue.getMinutes() - thevalue.getMinutes() + 30);
        }
        else if (thevalue.getMinutes() > 15 && thevalue.getMinutes() < 30) {
            thevalue.setMinutes(thevalue.getMinutes() - thevalue.getMinutes());
        }
        else if (thevalue.getMinutes() > 30 && thevalue.getMinutes() < 45) {
            thevalue.setMinutes(thevalue.getMinutes() - thevalue.getMinutes());
            thevalue.setHours(thevalue.getHours() + 1);
        }
        else if (thevalue.getMinutes() > 45 && thevalue.getMinutes() < 60) {
            thevalue.setMinutes(thevalue.getMinutes() - thevalue.getMinutes() + 30);
            thevalue.setHours(thevalue.getHours() - 1);
        }
        this.thevalue = thevalue;
    };
    //Checking whether timeslot is free
    AddAppointmentComponent.prototype.CheckAvailability = function (Datevalue) {
        var _this = this;
        var PhyFName = this.PhyFName;
        var PhyLName = this.PhyLName;
        var theDatevalue = new Date(this.thevalue);
        console.log(this.PhyFName);
        console.log(this.PhyLName);
        console.log(theDatevalue);
        //theDatevalue.setSeconds(theDatevalue.getSeconds() - theDatevalue.getSeconds());
        console.log(theDatevalue);
        //Checks if time is within opening hours
        if (theDatevalue.getHours() < 8 || theDatevalue.getHours() > 17) {
            var test = this.alerts.push({ msg: 'The Time you selected is outside Opening Hours!', type: 'danger', closable: true });
        }
        else if (PhyFName == null || PhyFName == "" || PhyLName == null || PhyLName == "") {
            var test = this.alerts.push({ msg: 'Please select a Phyiotherpaist!', type: 'warning', closable: true });
        }
        else {
            //Now do database call. Doesnt add?
            this.addappointmentservice.CheckAvailability(theDatevalue, PhyFName, PhyLName).subscribe(function (checkappTime) { _this.checkappTime = checkappTime; });
            //this.secretarydashservice.updateTable(selDate).subscribe(rows => {this.rows = rows;console.log(rows);})
            //Above call isnt adding anything to checkappTime
            //console.log(this.checkappTime.length);
            if (this.checkappTime.length > 0) {
                var test = this.alerts.push({ msg: 'The Time you selected is not Available!', type: 'danger', closable: true });
            }
            else {
                var test = this.alerts.push({ msg: 'The Time you selected is Available!', type: 'Success', closable: true });
            }
            ;
        }
        //var test = this.alerts.push({msg: 'The Time you selected is within Opening Hours!', type: 'success', closable: true});
    };
    AddAppointmentComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    AddAppointmentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'AddAppointment',
            templateUrl: 'AddAppointment.component.html',
            providers: [AddAppointment_service_1.AddAppointmentService]
        }), 
        __metadata('design:paramtypes', [AddAppointment_service_1.AddAppointmentService])
    ], AddAppointmentComponent);
    return AddAppointmentComponent;
}());
exports.AddAppointmentComponent = AddAppointmentComponent;
//# sourceMappingURL=AddAppointment.component.js.map