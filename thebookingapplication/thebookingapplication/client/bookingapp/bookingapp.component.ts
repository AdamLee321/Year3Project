import {Component } from '@angular/core';

import {bookingappService} from './services/app.service';
import {Appointment} from '../Appointment';
import {Calendar} from 'primeng/primeng';
import {Modal} from 'ng2-modal';

@Component({
	moduleId: module.id,
	selector: 'main-application',
	templateUrl: 'bookingapp.component.html',
	entryComponents: [Calendar, Modal],
	providers: [bookingappService],
})

export class bookingappComponent {
	_id: number;
	appointments:Appointment[];

	constructor(private bookingappservice:bookingappService){
		this.bookingappservice.getAppointments().subscribe(appointments => {
			this.appointments = appointments;
		});
	}

	updateTable(thedate){
		console.log(thedate);

		thedate = new Date(thedate.toISOString());
		this.bookingappservice.updateTable(thedate).subscribe(appointments => {
			this.appointments = appointments;
		});
	}
}	