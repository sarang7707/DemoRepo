import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { ExecuteService } from '../Shared/ExecuteServices';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [ExecuteService]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    isLoginError: boolean = false;
    constructor(private _router: Router, private _formBuilder: FormBuilder, private _service: ExecuteService) { }

    ngOnInit() {
        this.loginForm = this._formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
            password: ['', Validators.required]
        });
    }
    loginSubmit() {
        if (this.loginForm.valid) {

            this._service.userAuthentication(this.login.email.value, this.login.password.value).subscribe((result: any) => {
                
                var jsonData = JSON.stringify(result);
                var parsJson = JSON.parse(jsonData);
                var listContact = JSON.parse(parsJson["_body"]);
                console.log(listContact);
                sessionStorage.setItem('userToken', listContact.access_token);
                sessionStorage.setItem('userId', listContact.userName);
                //sessionStorage.setItem('startTime', listContact..issued)
                this._router.navigate(['admin','home']);
            },
             (err: HttpErrorResponse) => {
                 this.isLoginError = true;
             })
        }
    }
    get login() {
        return this.loginForm.controls;
    }
}
