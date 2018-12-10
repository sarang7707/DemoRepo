import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExecuteService } from '../../Shared/ExecuteServices';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [ExecuteService]
})
export class HomeComponent implements OnInit {
    userData: any;
    constructor(private router: Router, private service: ExecuteService) { }

    ngOnInit() {
        var id = sessionStorage.getItem('userId');
        this.service.getUserData(id).subscribe((data: any) => {

            var jsonData = JSON.stringify(data);
            var parsJson = JSON.parse(jsonData);
            var listContact = JSON.parse(parsJson["_body"]);
            this.userData = listContact;
        });
    }
    

}
