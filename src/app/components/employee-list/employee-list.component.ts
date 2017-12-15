import {Employee} from "../../models/employee";
import {Component, OnInit} from "@angular/core";
import {EmployeeListService} from "../../services/employee-list.service";
import {host} from "../../config";


@Component({
    selector:'employee-list-app',
    template:`<ul>
        <li *ngFor="let employee of employees">
            <p>логин: {{employee?.username}}</p>
            <img [src] = employee?.avatar style="width: 200px; height: 200px;">
            <!--<p>чек парам: {{employer?.check_params}}</p>-->
            <!--<p>чек контактс: {{employer?.check_contacts}}</p>-->
            <a [routerLink]="['/employer/employeeDetail', employee?.id ]">parametri</a>
            <a [routerLink]="['/employer/inviteDetail', employee?.id]">пригласить</a>
        </li>
    </ul>`,
    providers:[EmployeeListService]

})
export class EmployeeListComponent implements OnInit{

    employees:Employee[] = [];


    constructor(private httpService: EmployeeListService){}

    ngOnInit(){
        this.httpService.getEmploees(host+'employee/').subscribe(data => this.employees=data)

    }
}