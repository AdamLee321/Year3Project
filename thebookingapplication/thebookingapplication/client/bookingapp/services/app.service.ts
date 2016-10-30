import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class bookingappService{
	constructor(private http:Http){
		console.log('Appointment Service Initialized....');
	}

	getAppointments(){
		return this.http.get('http://localhost:3001/api/appointments').map( res => res.json());
	}
	updateTable(value){
		return this.http.get('http://localhost:3001/api/dayAppointments/:'+ value).map(res => res.json());
	}
}