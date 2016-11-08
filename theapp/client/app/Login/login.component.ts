import {Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html'
})

export class LoginComponent {
	login(event){
		event.preventDefault();
		alert('Login Click');
	}

	forgotPassword(event){
		event.preventDefault();
		alert('Pass Reset Click');
	}

 }