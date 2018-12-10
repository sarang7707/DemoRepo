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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ExecuteServices_1 = require("../Shared/ExecuteServices");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _formBuilder, _service) {
        this._router = _router;
        this._formBuilder = _formBuilder;
        this._service = _service;
        this.isLoginError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this._formBuilder.group({
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
            password: ['', forms_1.Validators.required]
        });
    };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this._service.userAuthentication(this.login.email.value, this.login.password.value).subscribe(function (result) {
                console.log(result);
                sessionStorage.setItem('userToken', result.access_token);
                sessionStorage.setItem('userId', result.userName);
                _this._router.navigate(['/home']);
            }, function (err) {
                _this.isLoginError = true;
            });
        }
    };
    Object.defineProperty(LoginComponent.prototype, "login", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            providers: [ExecuteServices_1.ExecuteService]
        }),
        __metadata("design:paramtypes", [router_1.Router, forms_1.FormBuilder, ExecuteServices_1.ExecuteService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map