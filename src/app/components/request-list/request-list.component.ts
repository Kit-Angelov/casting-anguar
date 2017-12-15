import {RequestDetail} from "../../models/requestDetail";
import {Component, OnInit} from "@angular/core";
import {RequestListService} from "../../services/request-list.service";
import {Role} from "../../models/role";
import {RoleService} from "../../services/role.service";
import {Employee} from "../../models/employee";
import {EmployeeListService} from "../../services/employee-list.service";
import {host} from "../../config";


@Component({
    selector:'request-app',
    template:`<ul>
        <li *ngFor="let request of requests">
            <p>роль: {{roleDetail?.name}}</p>
            <p>писание: {{roleDetail?.description}}</p>
            <p>имя {{employeeDetail?.first_name}}</p>
            <p>фамилия {{employeeDetail?.last_name}}</p>
            <img [src]="employeeDetail.avatar" style="width: 100px; height: 100px;"/>
            <p>статус {{request?.status}}</p>
        </li>
    </ul>
    `,
    providers:[RequestListService,RoleService,EmployeeListService]
})

export class RequestListComponent implements OnInit{

    user_id: string;
    requests:RequestDetail[]=[];
    roleDetail: Role;
    employeeDetail : Employee;

    constructor(private httpService:RequestListService,
                private roleService: RoleService,
                private employeeService:EmployeeListService){    }


    ngOnInit(){
        this.user_id = localStorage.getItem('user_id');
        this.httpService.getRequestLists(host+'request/'+'?employer_id='+this.user_id).subscribe(data=> {
            this.requests=data;
            let i: number = 0;
            for (let request of this.requests){
                i+=1
            }
            for (let request of this.requests){
                this.roleService.getRole(request.role).subscribe((datarole:Role)=> this.roleDetail=datarole);
                this.employeeService.getEmployeeDetail(request.employee).subscribe((dataemp:Employee) =>
                    this.employeeDetail = dataemp)
            }

        })
    }
}