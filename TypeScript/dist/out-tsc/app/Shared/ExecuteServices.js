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
var http_1 = require("@angular/http");
var ExecuteService = /** @class */ (function () {
    function ExecuteService(_http) {
        this._http = _http;
        this.url = 'http://localhost:50270';
    }
    ExecuteService.prototype.insertData = function (data) {
        return this._http.post(this.url + '/api/Registration/InsertRegistrtion', data);
    };
    ExecuteService.prototype.userAuthentication = function (email, password) {
        var data = "userName=" + email + "&password=" + password + "&grant_type=password";
        var header = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + '/token', data, { headers: header });
    };
    ExecuteService.prototype.getUserData = function () {
        return this._http.get(this.url + '/api/Registration/GetDetails');
    };
    ExecuteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ExecuteService);
    return ExecuteService;
}());
exports.ExecuteService = ExecuteService;
//# sourceMappingURL=ExecuteServices.js.map