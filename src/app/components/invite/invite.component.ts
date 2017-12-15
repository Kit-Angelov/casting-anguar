import { Component, OnInit} from '@angular/core';
import {Invite} from "../../models/invite";
import {InviteService} from "../../services/invite.service";
import {RoleService} from "../../services/role.service";
import {Role} from "../../models/role";
import {Employee} from "../../models/employee";
import {EmployeeProfileService} from "../../services/employee-profile.service";
import {host} from "../../config";


@Component({
    selector: 'invite-app',
    template: `
                <p>Дата создания заявки: {{user?.creation_date}}</p>
                <p>приглашаю: {{naemnik?.username}}</p>
                <p>приглашает: {{employer?.username}}</p>
                <p>  роль: {{role?.name}}</p>
                `,
    providers: [InviteService,RoleService,EmployeeProfileService]
})
export class InviteComponent implements OnInit{

    user: Invite;
    qwer: string;
    role: Role;
    naemnik: Employee;
    actor: string;
    sozdatel: string;
    employer: '';

    constructor(private httpService: InviteService,
                private roleService:RoleService,
                private employeeServie: EmployeeProfileService){}

    ngOnInit(){
        this.httpService.getInvite(host+'invite').subscribe((data:Invite) => {
            this.user = data;
            this.qwer = this.user.role;
            this.roleService.getRole(this.qwer).subscribe((data: Role) => this.role = data);
            this.actor = this.user.employee;
            this.employeeServie.getEmployee(this.actor).subscribe((data : Employee)=> this.naemnik = data);
            this.sozdatel = this.user.employer;
            // this.creatorService.getCreator(this.sozdatel).subscribe((data: string)=> this.employer = data)
        });
    }
}
