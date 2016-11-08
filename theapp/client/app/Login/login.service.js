//import {Http, Headers} from '@angular/http';
"use strict";
var LoginService = (function () {
    function LoginService() {
        /*constructor(private http:Http){
            console.log('Appointment Service Initialized....');
        }*/
        this.testProperty = "Test Worked";
    }
    LoginService.prototype.testMethod = function () {
        return this.testProperty;
    };
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map