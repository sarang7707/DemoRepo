"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registration_component_1 = require("./registration/registration.component");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var auth_guard_1 = require("./auth/auth.guard");
exports.appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'registration', component: registration_component_1.RegistrationComponent },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] }
];
//# sourceMappingURL=app.routes.js.map