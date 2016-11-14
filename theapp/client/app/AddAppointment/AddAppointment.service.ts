import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AddAppointmentService{
    constructor(private http:Http){
        console.log('Add Appointments Service Initialized!');
    }

    CheckAvailability(theDatevalue, PhysioFName, PhysioLName){
        //theDatevalue = new Date(theDatevalue);
        
        console.log("Ok, Im getting to the Service");
        console.log(theDatevalue + "Boopty boop");
        return this.http.get('http://localhost:3000/api/dayAppointments/:'+theDatevalue+'/'+PhysioFName+'/'+PhysioLName).map(res => res.json());
    }
}

//