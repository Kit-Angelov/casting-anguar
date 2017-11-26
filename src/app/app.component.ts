import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';

@Component({
    selector: 'my-app',
    template: `<!--<div *ngIf="auth; else unset">-->
        <!--<main-app></main-app>-->
    <!--</div>-->
    <!--<ng-template #unset>-->
        <!--<div>-->
            <!--<reg-app></reg-app>-->
        <!--</div>-->
    <!--</ng-template>-->
        <!--<parameters-app></parameters-app>-->
        <!--<auth-app></auth-app>-->
        <testimg-app></testimg-app>
    `,
    providers: [HttpService]
})
export class AppComponent {
    auth: boolean;
    constructor(){}
    ngOnInit() {
        let user_id: string = '20';
        let token: string = 'eerw';
        localStorage.setItem( 'token', token );
        localStorage.setItem('user_id', user_id);
        let tok:string;
        tok = localStorage.getItem('token');
        if (tok.length > 0) {
            this.auth = true;
        }
        else {
            this.auth = false;
        }
     }
}
