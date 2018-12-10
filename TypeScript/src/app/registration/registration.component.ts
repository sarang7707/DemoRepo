import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExecuteService } from '../Shared/ExecuteServices';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
    providers: [ExecuteService]
})
export class RegistrationComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private _service: ExecuteService, private router: Router) {

    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
            username: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
    }
    register() {
        if (this.registerForm.valid) {
            var data = this.registerForm.value;
            this._service.insertData(data).subscribe(result => {
                this.router.navigateByUrl('/login');
            })
        }
    }
    get reg() {
        return this.registerForm.controls;
    }
}
