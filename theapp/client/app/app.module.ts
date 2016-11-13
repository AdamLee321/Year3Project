import { NgModule }      	from '@angular/core';
import { HttpModule } 		from '@angular/http';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule} 		from '@angular/forms';
import { RouterModule}		from '@angular/router';

import { AppComponent} 		from './app.component';
import { LoginComponent } from './Login/login.component';

import { SecretaryDashModule} from './SecretaryDash/SecretaryDash.module';
import { addPatientModule } from './AddPatient/addPatient.module';
import { ViewPatientsModule } from './ViewPatients/viewPatients.module';

import { AddAppointmentModule} from './AddAppointment/AddAppointment.module';

import { AppRoutingModule } from './app-routing.module';	

@NgModule({
	imports: [HttpModule, BrowserModule, FormsModule, RouterModule, SecretaryDashModule,addPatientModule, ViewPatientsModule, AddAppointmentModule, AppRoutingModule],
	declarations: [AppComponent, LoginComponent],
	bootstrap: [AppComponent]
})

export class AppModule { }