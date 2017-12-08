import { Component, OnInit} from '@angular/core';
import { HttpService} from '../http.service';
import {Router} from '@angular/router';

@Component({
    selector: 'employee-app',
    template: `<div class="col-md-8 col-md-offset-2">
                 <nav>
                    <h1>Актер</h1> 
                    <a routerLink="role_list" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Каталог Ролей</a> |
                    <a routerLink="req_inv" routerLinkActive="active">Заявки и приглашения</a> |
                    <a routerLink="profile" routerLinkActive="active">Мой профиль</a> |
                    <a routerLink="/logout">Выйти</a> 
                 </nav>
                 <router-outlet></router-outlet>
                </div>`,
    providers: [HttpService]
})
export class EmployeeComponent {

}
