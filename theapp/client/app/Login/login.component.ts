import {Component } from '@angular/core';

import {LoginService} from './login.service';

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html',
	providers: [LoginService],
})

export class LoginComponent {
	//Properties
	testProperty : string;



	//Methods
	login(event){
		event.preventDefault();
		this.testProperty = this.loginService.testMethod();
	}

	forgotPassword(event){
		event.preventDefault();
		alert('Pass Reset Click');
	}

	//Injected thingy
	constructor(private loginService : LoginService ){
		//this.testProperty = loginService.testMethod();
	}

	

 }