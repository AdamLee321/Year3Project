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
		this.loginService.testGet()
		.subscribe(
			data => this.testProperty = JSON.stringify(data),
			error => alert(error),
			() => console.log('Get Finished')
		);
		
	}

	forgotPassword(event){
		event.preventDefault();
		this.loginService.testPost().subscribe(
			data => this.testProperty = JSON.stringify(data),
			error => alert(error),
			() => console.log('Post Finished')
		);
	}



	//Injected thingy
	constructor(private loginService : LoginService ){
	}

	

 }