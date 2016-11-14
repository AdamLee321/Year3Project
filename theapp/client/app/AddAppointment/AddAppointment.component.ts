import {Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'AddAppointment',
    templateUrl: 'AddAppointment.component.html'
})

export class AddAppointmentComponent{
    thevalue: Date;

    ngOnInit(){
        var thevalue = new Date(Date.now());

        this.UpdateDate(thevalue);
    }

    UpdateDate(value){
        var thevalue = new Date(value);
        console.log(thevalue.getMinutes())
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

        if(thevalue.getHours() < 8 || thevalue.getHours() > 17){
            
        }
    }
}