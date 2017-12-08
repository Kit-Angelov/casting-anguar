import { Component, OnInit} from '@angular/core';
import { HttpService} from '../http.service';
import {Router} from '@angular/router';

@Component({
    selector: 'employer-app',
    template: `<div class="col-md-8 col-md-offset-2">
                <nav>
                    <h1>Заказчик</h1>
                    <a routerLink="casting_list" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Мои кастинги</a> |
                    <a routerLink="inv_req" routerLinkActive="active">Заявки и приглашения</a> |
                    <a routerLink="employees" routerLinkActive="active">Каталог Актеров</a> |
                    <a routerLink="profile" routerLinkActive="active">Мой профиль</a> |
                    <a routerLink="/logout">Выйти</a>
                </nav>
                <router-outlet></router-outlet>
                </div>`,
    providers: [HttpService]
})
export class EmployerComponent {

}
