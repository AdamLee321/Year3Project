import {Component } from '@angular/core';
import {SecretaryDashService} from './SecretaryDash.service';
import {Appointment} from '../Appointment';
import {test} from '../test';

@Component({
	moduleId: module.id,
	selector: 'SecDash',
	templateUrl: 'SecretaryDash.component.html',
	providers: [SecretaryDashService],
})

export class SecretaryDashComponent {
	rows: Appointment[] = [];
	Location: String = "Dublin";

	names: test[];

	times: Date[] = [
		new Date(2016,11,11,8,0,0),
		new Date(2016,11,11,8,30,0),
		new Date(2016,11,11,9,0,0),
		new Date(2016,11,11,9,30,0),
		new Date(2016,11,11,10,0,0),
		new Date(2016,11,11,10,30,0),
		new Date(2016,11,11,11,0,0),
		new Date(2016,11,11,11,30,0),
		new Date(2016,11,11,12,0,0),
		new Date(2016,11,11,12,30,0),
		new Date(2016,11,11,13,0,0),
		new Date(2016,11,11,13,30,0),
		new Date(2016,11,11,14,0,0),
		new Date(2016,11,11,14,30,0),
		new Date(2016,11,11,15,0,0),
		new Date(2016,11,11,15,30,0),
		new Date(2016,11,11,16,0,0),
		new Date(2016,11,11,16,30,0),
		new Date(2016,11,11,17,0,0),
		new Date(2016,11,11,17,30,0),
		]


	constructor(private secretarydashservice:SecretaryDashService){}

	updateTable(selDate){
		this.rows.length = 0;
		console.log(selDate + "SecretaryDash.component.ts speaking");
		this.secretarydashservice.updateTable(selDate).subscribe(rows =>
		{
			for(var i=0; i<rows.length; i++){
				this.rows.push(rows[i]);
			}
			console.log(this.rows);
			this.GetPhysios();
		})
	}

	OnInit(){
		this.GetPhysios();
	}

	GetPhysios(){
		console.log(this.Location);
		this.secretarydashservice.GetPhysios(this.Location).subscribe(names =>
			{
				this.names = names;
				console.log(this.names);
			})
	}
 }