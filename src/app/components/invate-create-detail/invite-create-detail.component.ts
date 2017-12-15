import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Employer} from "../../models/employer";
import {Role} from "../../models/role";
import {RoleListService} from "../../services/role-list.service";
import {EmployeeProfileService} from "../../services/employee-profile.service";
import {Employee} from "../../models/employee";
import {EmployerProfileService} from "../../services/employer-profile.service";
import {InviteService} from "../../services/invite.service";
import {Invite} from "../../models/invite";
import {host} from "../../config";

@Component({
    selector: 'invite-create-detail-app',
    template: `
        <select [(ngModel)]="invite.role" >
            <option *ngFor="let role of roles" value="{{role?.id}}">роль: {{role?.name}}</option>
        </select>
        <button (click)="submit(invite)">пригласить </button>`,
    providers: [RoleListService, EmployeeProfileService,EmployerProfileService,InviteService]
})
export class InviteCreateDetailComponent implements OnInit{


    invite: Invite = new Invite();
    roles: Role[]=[];
    id: string;
    invites: any;
    employee: Employee;
    employer :Employer;
    user_id: string = localStorage.getItem('user_id');


    constructor(private roleService: RoleListService,
                private activateRoute: ActivatedRoute,
                private inviteService: InviteService){
        this.id = this.activateRoute.snapshot.params['id'];
    }

    ngOnInit(){
        this.roleService.getRoleList(host+'role/').subscribe(data => this.roles=data);

    }
    submit(invite: Invite){
        this.invite.employer = this.user_id;
        this.invite.employee = this.id;
        this.inviteService.postInvite(invite, host+'new_invite/').subscribe(data => this.invites = data)

    }

}
