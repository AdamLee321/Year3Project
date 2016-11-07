import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Login/login.component';
import { SecretaryDashComponent} from './SecretaryDash/SecretaryDash.component';
import { AddPatientComponent } from './AddPatient/addPatient.component';

const routes: Routes =[
	{ path: '', redirectTo: 'secdash', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'secdash', component: SecretaryDashComponent},
	{ path: 'addPatient', component: AddPatientComponent}
]

@NgModule({
	imports: [ RouterModule.forRoot(routes)],
	exports: [ RouterModule]
})

export class AppRoutingModule { }