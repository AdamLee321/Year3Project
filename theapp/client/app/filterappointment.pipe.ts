import {Pipe, PipeTransform} from '@angular/core';

import {Appointment} from './Appointment';

@Pipe({ name: 'FilterAppointment'})

export class FilterAppointmentPipe implements PipeTransform{
    appointmentCopy: Appointment[] = [];
    theSelDate:Date;
    transform(Appointments:Appointment[], time:Date,FName:String, LName:String){
        this.appointmentCopy = [];
        console.log(Appointments);
        console.log(time);
        console.log(FName);
        console.log(LName);

        for(var i=0; i<Appointments.length; i++){
            Appointments[i].dateOfApp = new Date(Appointments[i].dateOfApp);
            if(Appointments[i].dateOfApp.getHours() == time.getHours() && Appointments[i].dateOfApp.getMinutes() == time.getMinutes() && Appointments[i].Phy_Fname == FName && Appointments[i].Phy_Lname == LName){
                console.log(Appointments[i]);
                this.appointmentCopy.push(Appointments[i]);
            }
        }
        return this.appointmentCopy;
    }
}