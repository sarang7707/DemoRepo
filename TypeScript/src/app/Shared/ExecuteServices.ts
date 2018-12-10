import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class ExecuteService {
    url: string = 'http://localhost:50270';
    constructor(private _http: Http) { }

    insertData(data: any) {
        return this._http.post(this.url + '/api/Registration/InsertRegistrtion', data);
    }
    userAuthentication(email, password) {
        var data = "userName=" + email + "&password=" + password + "&grant_type=password";
        let header = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + '/token', data, { headers: header });
    }
    getUserData(id) {
        return this._http.get(this.url + '/api/Registration/GetDetails', { params: { id: id } });
    }
}