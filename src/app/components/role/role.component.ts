import { Component, OnInit} from '@angular/core';
import {Role} from "./role";
import {RoleService} from "./role.service";


@Component({
    selector: 'role-app',
    template: `
                <p>Название кастинга: {{role?.casting?.name}}</p>
                <p>Название роли: {{role?.name}}</p>
                <p>Гонорар: {{role?.salary}}</p>
                <p>Начало пробы на роль: {{role?.start_date}}</p>
                <p>Окончание пробы: {{role?.expire_date}}</p>
                <p>Описание: {{role?.description}}</p>
              `,
    providers: [RoleService]
})
export class RoleComponent implements OnInit{
    path: string = 'role/1/';
    role: Role;
    constructor(private httpService: RoleService){}

    ngOnInit(){
        this.httpService.getRole(this.path).subscribe((data: Role) => this.role=data);
    }
}