import { NgModule }      	from '@angular/core';
import { HttpModule } 		from '@angular/http';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule} 		from '@angular/forms';
import { RouterModule}		from '@angular/router';

import { AppComponent} 		from './app.component';
import { LoginComponent } from './Login/login.component';
import { SecretaryDashComponent} from './SecretaryDash/SecretaryDash.component';
import { SecretaryHeaderComponent} from './SecretaryDash/secretary-header.component';
import { AddPatientComponent } from './AddPatient/addPatient.component';

import { AppRoutingModule } from './app-routing.module';

import { CalendarModule } from 'primeng/primeng';

@NgModule({
	imports: [HttpModule, BrowserModule, FormsModule, RouterModule, AppRoutingModule, CalendarModule],
	declarations: [AppComponent, LoginComponent, SecretaryDashComponent, SecretaryHeaderComponent, AddPatientComponent ],
	bootstrap: [AppComponent]
})

export class AppModule { }