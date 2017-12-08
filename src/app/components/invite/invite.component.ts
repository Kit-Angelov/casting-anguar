import { Component, OnInit} from '@angular/core';
import {Invite} from "./invite";
import {InviteService} from "./invite.service";
import {RoleService} from "../role/role.service";
import {Role} from "../role/role";
import {EmployeeProfile} from "../employee-profile/employee-profile";
import {EmployeeProfileService} from "../employee-profile/employee-profile.service";


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
    naemnik: EmployeeProfile;
    actor: string;
    sozdatel: string;
    employer: '';

    constructor(private httpService: InviteService,
                private roleService:RoleService,
                private employeeServie: EmployeeProfileService){}

    ngOnInit(){
        this.httpService.getInvite().subscribe((data:Invite) => {
            this.user = data;
            this.qwer = this.user.role;
            this.roleService.getRole(this.qwer).subscribe((data: Role) => this.role = data);
            this.actor = this.user.employee;
            this.employeeServie.getEmployee(this.actor).subscribe((data : EmployeeProfile)=> this.naemnik = data);
            this.sozdatel = this.user.creator;
            // this.creatorService.getCreator(this.sozdatel).subscribe((data: string)=> this.employer = data)
        });
    }
}
