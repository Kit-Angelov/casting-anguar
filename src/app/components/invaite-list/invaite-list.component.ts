import { Component, OnInit} from '@angular/core';
import {Invite} from "../../models/invite";
import {InvaiteListService} from "../../services/invaite-list.service";
import {EmployeeListService} from "../../services/employee-list.service";
import {Employee} from "../../models/employee";
import {RoleService} from "../../services/role.service";
import {Role} from "../../models/role";
import {host} from "../../config";


@Component({
    selector: 'invite-list-app',
    template: `<ul>
        <li *ngFor="let invite of invites">
            <p>приглашаю: {{employeeDetail?.first_name}}</p>
            <p>приглашаю: {{employeeDetail?.last_name}}</p>
            <a [routerLink]="['/employer/employeeDetail', employeeDetail?.id ]">
                <img  [src]="employeeDetail?.avatar" style="height: 200px;width: 200px;">
            </a>
            <p>роль: {{roleDetail?.name}}</p>
        </li>
    </ul>
    `,
    providers: [InvaiteListService,EmployeeListService,RoleService]
})
export class InvaiteListComponent implements OnInit{

    invites:Invite[]=[];
    employeeDetail:Employee;
    roleDetail: Role;
    constructor(private httpService: InvaiteListService,
                private employeeService: EmployeeListService,
                private roleService: RoleService){}

    ngOnInit(){
        this.httpService.getInviteLists(host + 'invite/').subscribe((data) =>{ this.invites=data;
            let i: number = 0;
            for (let invite of this.invites){
                i+=1
            }

            for (let invite of this.invites) {
                this.employeeService.getEmployeeDetail(invite.employee).subscribe((dataemp:Employee) => this.employeeDetail = dataemp);
                this.roleService.getRole(invite.role).subscribe((datarol: Role) => this.roleDetail = datarol);

            }

        })

    }

}