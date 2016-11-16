"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.testProperty = "Test Worked";
        console.log('Appointment Service Initialized....');
    }
    LoginService.prototype.testMethod = function () {
        return this.testProperty;
    };
    LoginService.prototype.testPost = function () {
        console.log('Test Post Clicked');
        var json = JSON.stringify({ var1: 'test', var2: 3 });
        var params = 'json=' + json;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('/testapi/post', params, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.testGet = function () {
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
            .map(function (res) { return res.json(); });
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map