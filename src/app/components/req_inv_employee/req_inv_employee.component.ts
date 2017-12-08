import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'req-inv-employee-app',
    template: `<div>
                 <nav>
                    <a routerLink="requests" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Заявки</a> |
                    <a routerLink="invites" routerLinkActive="active">Приглашения</a>
                 </nav>
                 <router-outlet></router-outlet>
                </div>`,
})
export class Req_inv_employeeComponent {

}
