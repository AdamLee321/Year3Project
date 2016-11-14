import {Component, OnInit} from '@angular/core';
import { AddAppointmentService} from './AddAppointment.service';
import{ Moment} from 'moment/moment';
import {test} from '../test';

@Component({
    moduleId: module.id,
    selector: 'AddAppointment',
    templateUrl: 'AddAppointment.component.html',
    providers: [AddAppointmentService]
})

export class AddAppointmentComponent{
    PhyFName:string;
    PhyLName:string;
    thevalue: Date;

    public alerts:Array<Object> = [];
    checkappTime:test[];

    constructor(private addappointmentservice:AddAppointmentService){}

    ngOnInit(){
        var thevalue = new Date(Date.now());
        this.UpdateDate(thevalue);
    }

    UpdateDate(value){
        var thevalue = new Date(value);
        if(thevalue.getMinutes() > 0 && thevalue.getMinutes() <15){
            thevalue.setMinutes(thevalue.getMinutes() - thevalue.getMinutes() + 30);
        }
        else if(thevalue.getMinutes() > 15 && thevalue.getMinutes() <30){
            thevalue.setMinutes(thevalue.getMinutes() - thevalue.getMinutes());
        }
        else if(thevalue.getMinutes() > 30 && thevalue.getMinutes() <45){
            thevalue.setMinutes(thevalue.getMinutes() - thevalue.getMinutes());
            thevalue.setHours(thevalue.getHours() + 1);
        }
        else if(thevalue.getMinutes() > 45 && thevalue.getMinutes() <60){
            thevalue.setMinutes(thevalue.getMinutes() - thevalue.getMinutes() + 30);
            thevalue.setHours(thevalue.getHours() - 1);
        }
        this.thevalue = thevalue;
    }

    //Checking whether timeslot is free
    public CheckAvailability(Datevalue):void{
        var PhyFName = this.PhyFName;
        var PhyLName = this.PhyLName;
        var theDatevalue = new Date(this.thevalue);

        console.log(this.PhyFName);
        console.log(this.PhyLName);
        console.log(theDatevalue);

        //theDatevalue.setSeconds(theDatevalue.getSeconds() - theDatevalue.getSeconds());
        console.log(theDatevalue);
        //Checks if time is within opening hours
        if(theDatevalue.getHours() < 8 || theDatevalue.getHours() > 17){
            var test = this.alerts.push({msg: 'The Time you selected is outside Opening Hours!', type: 'danger', closable: true});
        }
        //Checks if physio is selected
        else if(PhyFName == null || PhyFName == "" || PhyLName == null || PhyLName  == ""){
            var test = this.alerts.push({msg: 'Please select a Phyiotherpaist!', type: 'warning', closable: true});
        }
        else{
            //Now do database call. Doesnt add?
            this.addappointmentservice.CheckAvailability(theDatevalue, PhyFName, PhyLName).subscribe(checkappTime => {this.checkappTime = checkappTime;})

            //this.secretarydashservice.updateTable(selDate).subscribe(rows => {this.rows = rows;console.log(rows);})

            //Above call isnt adding anything to checkappTime
            //console.log(this.checkappTime.length);

            if(this.checkappTime.length > 0) {
            var test = this.alerts.push({msg: 'The Time you selected is not Available!', type: 'danger', closable: true})
            }
            else{
                var test = this.alerts.push({msg: 'The Time you selected is Available!', type: 'Success', closable: true})
            };
        }
        
        //var test = this.alerts.push({msg: 'The Time you selected is within Opening Hours!', type: 'success', closable: true});
    }

    public closeAlert(i:number):void {
        this.alerts.splice(i, 1);
    } 
}