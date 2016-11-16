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
var login_service_1 = require('./login.service');
var LoginComponent = (function () {
    //Injected thingy
    function LoginComponent(loginService) {
        this.loginService = loginService;
    }
    //Methods
    LoginComponent.prototype.login = function (event) {
        var _this = this;
        event.preventDefault();
        this.loginService.testGet()
            .subscribe(function (data) { return _this.testProperty = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log('Get Finished'); });
    };
    LoginComponent.prototype.forgotPassword = function (event) {
        var _this = this;
        event.preventDefault();
        this.loginService.testPost().subscribe(function (data) { return _this.testProperty = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log('Post Finished'); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html',
            providers: [login_service_1.LoginService],
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map