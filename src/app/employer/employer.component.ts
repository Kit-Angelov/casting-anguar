import { Component, OnInit} from '@angular/core';
import { HttpService} from '../http.service';
import {Router} from '@angular/router';

@Component({
    selector: 'employer-app',
    templateUrl: './employer.component.html',
    providers: [HttpService],
    styleUrls: ['./employer.component.css']
})
export class EmployerComponent {

}
