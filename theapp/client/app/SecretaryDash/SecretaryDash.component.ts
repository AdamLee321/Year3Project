import {Component } from '@angular/core';
import {SecretaryDashService} from './SecretaryDash.service';
import {Appointment} from '../Appointment';

@Component({
	moduleId: module.id,
	selector: 'SecDash',
	templateUrl: 'SecretaryDash.component.html',
	providers: [SecretaryDashService]
})

export class SecretaryDashComponent {
	rows: Appointment[];
	constructor(private secretarydashservice:SecretaryDashService){}

	updateTable(selDate){
		console.log(selDate + "SecretaryDash.component.ts speaking");
		this.secretarydashservice.updateTable(selDate).subscribe(rows => {this.rows = rows;console.log(rows);})
	}
 }