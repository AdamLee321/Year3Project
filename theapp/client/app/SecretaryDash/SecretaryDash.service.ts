import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SecretaryDashService{
    constructor(private http:Http){
        console.log('Appointments Service Initialized!');
    }

    updateTable(selDate){
        console.log(selDate);
        return this.http.get('http://localhost:3000/api/dayAppointments/:'+selDate).map(res => res.json());
    }

    GetPhysios(ALocation){
        console.log(ALocation + " Service");
        return this.http.get('http://localhost:3000/api/dayAppointments/:TheLocation/'+ALocation).map(res => res.json());
    }

}