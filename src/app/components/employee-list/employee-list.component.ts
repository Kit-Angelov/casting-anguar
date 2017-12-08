import {EmployeeList} from "./employee-list";
import {Component, OnInit} from "@angular/core";
import {EmployeeListService} from "./employee-list.service";




@Component({
    selector:'employee-list-app',
    template:`<ul>
        <li *ngFor="let employer of employers">
            <p>логин: {{employer?.username}}</p>
            <img [src] = employer?.avatar style="width: 200px; height: 200px;">
            <!--<p>чек парам: {{employer?.check_params}}</p>-->
            <!--<p>чек контактс: {{employer?.check_contacts}}</p>-->
        </li>
    </ul>`,
    providers:[EmployeeListService]

})
export class EmployeeListComponent implements OnInit{

    employers:EmployeeList[] = [];


    constructor(private httpService: EmployeeListService){}

    ngOnInit(){
        this.httpService.getEmploees().subscribe(data => this.employers=data)

    }
}