import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()


export class LoginService{
    constructor(private http:Http){
		console.log('Appointment Service Initialized....');
	}
    testProperty : string = "Test Worked";

	testMethod(){
		return this.testProperty;
		
	}

	testPost(){
		console.log('Test Post Clicked');
		
		var json = JSON.stringify({var1 : 'test', var2 : 3});
		var params = 'json=' + json;
		var headers = new Headers();
		headers.append('Content-Type','application/x-www-form-urlencoded');
		return this.http.post('/testapi/post',
			params,
			{
				headers: headers
			})
			.map(res => res.json());
	}

	testGet(){
		console.log('Test Get Clicked');
		//test data, will return in format 
		/*
		{
			"time" : "00:00:00 AM",
			"milliseconds_since_epoch" : 10000000000,
			"date" : "01-01-0001"
		}
		*/
		//
		return this.http.get('/testapi/get')
		.map(res => res.json());
	}
}